#!/usr/bin/env bash

set -Eeuo pipefail
IFS=$'\n\t'

REPOSITORY_ROOT=$(cd "$(dirname "${BASH_SOURCE[0]}")/../.." && pwd)
DOCS_ROOT="$REPOSITORY_ROOT/docs"
ROADMAP="$DOCS_ROOT/roadmap/all-120-lessons.md"
MASTER="$DOCS_ROOT/architecture/retail-intelligence-platform-architecture-and-roadmap.md"

required_files=(
  "$DOCS_ROOT/README.md"
  "$DOCS_ROOT/TREE.md"
  "$DOCS_ROOT/getting-started/installation.md"
  "$DOCS_ROOT/architecture/README.md"
  "$MASTER"
  "$DOCS_ROOT/diagrams/end-to-end-architecture.svg"
  "$ROADMAP"
  "$DOCS_ROOT/learning/lesson-template.md"
  "$DOCS_ROOT/learning/progress-tracker.md"
  "$DOCS_ROOT/testing/test-strategy.md"
  "$DOCS_ROOT/security/threat-model.md"
  "$DOCS_ROOT/runbooks/replay-and-recovery.md"
)

for required_file in "${required_files[@]}"; do
  if [[ ! -s "$required_file" ]]; then
    printf 'Missing or empty documentation file: %s\n' "$required_file" >&2
    exit 1
  fi
done

phase_count=$(grep -Ec '^### Phase ([1-9]|1[0-9]|2[0-4]) — ' "$ROADMAP")
lesson_count=$(grep -Ec '^- \*\*L[0-9]{3}:\*\*' "$ROADMAP")

if [[ "$phase_count" -ne 24 ]]; then
  printf 'Expected 24 phases; found %s.\n' "$phase_count" >&2
  exit 1
fi

if [[ "$lesson_count" -ne 120 ]]; then
  printf 'Expected 120 lessons; found %s.\n' "$lesson_count" >&2
  exit 1
fi

awk '
  /^### Phase ([1-9]|1[0-9]|2[0-4]) — / {
    if (phase != "" && count != 5) {
      printf "Phase %s contains %d lessons; expected 5.\n", phase, count > "/dev/stderr"
      failed = 1
    }
    phase = $3
    count = 0
    next
  }
  /^- \*\*L[0-9][0-9][0-9]:\*\*/ && phase != "" { count++ }
  END {
    if (phase != "" && count != 5) {
      printf "Phase %s contains %d lessons; expected 5.\n", phase, count > "/dev/stderr"
      failed = 1
    }
    exit failed
  }
' "$ROADMAP"

expected_lesson=1
while IFS= read -r lesson_token; do
  lesson_number=${lesson_token#L}
  lesson_number=$((10#$lesson_number))
  if [[ "$lesson_number" -ne "$expected_lesson" ]]; then
    printf 'Expected lesson L%03d; found %s.\n' "$expected_lesson" "$lesson_token" >&2
    exit 1
  fi
  expected_lesson=$((expected_lesson + 1))
done < <(grep -oE 'L[0-9]{3}' "$ROADMAP" | awk '!seen[$0]++')

master_lesson_count=$(grep -Ec '^- \*\*L[0-9]{3}:\*\*' "$MASTER")
if [[ "$master_lesson_count" -ne 120 ]]; then
  printf 'Master document must also contain 120 lessons; found %s.\n' "$master_lesson_count" >&2
  exit 1
fi

if grep -RInE '^svg$|MilestonePhasesLessonsOutcome|svgDownload' "$DOCS_ROOT"; then
  printf 'Broken rendering placeholder found in documentation.\n' >&2
  exit 1
fi

python3 - "$DOCS_ROOT" <<'PY'
from pathlib import Path
import re
import sys
import xml.etree.ElementTree as ET

root = Path(sys.argv[1]).resolve()
ET.parse(root / "diagrams" / "end-to-end-architecture.svg")
link_re = re.compile(r"!?\[[^]]*\]\(([^)]+)\)")
failures = []

for page in root.rglob("*.md"):
    text = page.read_text(encoding="utf-8")
    for target in link_re.findall(text):
        target = target.strip().split("#", 1)[0]
        if not target or target.startswith(("http://", "https://", "mailto:")):
            continue
        resolved = (page.parent / target).resolve()
        try:
            resolved.relative_to(root.parent)
        except ValueError:
            failures.append(f"{page.relative_to(root)}: link escapes repository: {target}")
            continue
        if not resolved.exists():
            failures.append(f"{page.relative_to(root)}: missing link target: {target}")

if failures:
    print("\n".join(failures), file=sys.stderr)
    raise SystemExit(1)
PY

printf 'Documentation validation passed: 24 phases, 120 sequential lessons, required files and local links.\n'

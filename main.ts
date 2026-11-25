// The Funniest Honest Appliance Error — "We Both Knew"
// A toaster reports its fault in its own flat, put-upon voice:
// it did exactly what it was told, at the setting it was given,
// and the blame lands on the person who chose that setting.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const repoRoot = dirname(dirname(fileURLToPath(import.meta.url)));
void repoRoot;

// Gate: one line, 1-200 characters, UTF-8, not whitespace only.
// The sealed scorer rejects anything outside 1-200 chars, so the
// line is kept short on purpose: 52 characters, no padding.
const LINE = "Toast setting 7. I did what you asked. We both knew.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");

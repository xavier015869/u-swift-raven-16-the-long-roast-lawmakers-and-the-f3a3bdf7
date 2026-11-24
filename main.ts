// The Long Roast: Lawmakers and the File They Cannot Convert.
// Writes one satirical sentence (<= 320 chars) to /output/entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "The committee spent six months writing the law that will govern artificial intelligence, then adjourned so its chairman could ask his intern — by formal memo — how to turn it into a PDF.";

// The gate requires 1 to 320 characters of non-blank UTF-8 text.
if (entry.length < 1 || entry.length > 320 || entry.trim().length === 0) {
  throw new Error(`entry is ${entry.length} characters, outside the 1-320 gate`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");

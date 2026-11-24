import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "The build failed because the tests only ever passed on the laptop that left the company in March. The code was never broken — the laptop was the CI server.";

const chars = [...line].length;
if (chars < 1 || chars > 200) {
  throw new Error(`entry must be 1-200 characters, got ${chars}`);
}
if (line.trim().length === 0 || line.includes("\n")) {
  throw new Error("entry must be a single non-blank line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
console.log(`wrote /output/entry.txt (${chars} characters, 1 line)`);

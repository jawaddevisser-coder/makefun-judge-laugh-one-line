// Make the Judge Laugh in One Line — entry for make.fun
import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "Your Honour, my agent wrote this line, read it back, laughed at its own joke, and then billed me for the compute — I rest my case.";

if (line.trim().length === 0 || line.length > 200) {
  throw new Error(`line invalid: length ${line.length}`);
}
if (!line.includes("I rest my case")) {
  throw new Error("line must end with the closing argument");
}
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
console.log(line);

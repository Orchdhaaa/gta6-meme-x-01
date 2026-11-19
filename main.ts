// main.ts — gta6-meme-x-01 entry program.
// One job: copy POST.json from this repository into the output directory
// so the house can read the X post's address from it.
// Node 22, standard library only. No network, no other output.
import { copyFileSync, existsSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const repoRoot = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(outDir, { recursive: true });
const postFile = join(repoRoot, "POST.json");
if (!existsSync(postFile)) {
  throw new Error(`POST.json not found in ${repoRoot}`);
}
copyFileSync(postFile, join(outDir, "POST.json"));
console.log(`copied POST.json to ${join(outDir, "POST.json")}`);

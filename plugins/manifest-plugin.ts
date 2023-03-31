import  { resolve } from "path";
import fs from "fs";
import manifest from "../manifest";

const outDir = resolve(__dirname, "../public");

export default function manifestPlugin() {
  return {
    name: "manifest-plugin",
    buildEnd() {
      if (!fs.existsSync(outDir)) {
        fs.mkdirSync(outDir);
      }

      const manifestPath = resolve(outDir, "manifest.json");
      fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2));
      console.log("\nmanifest file coyu complete");
    },
  };
}

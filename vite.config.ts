import { defineConfig } from "vite";
import { resolve } from "path";
import manifestPlugin from "./plugins/manifest-plugin";
import vue from "@vitejs/plugin-vue";

const root = resolve(__dirname, "src");
const assetsDir = resolve(root, "assets");
const outDir = resolve(__dirname, "dist");
const publicDir = resolve(__dirname, "public");

export default defineConfig({
  resolve: {
    alias: {
      "@src": root,
      "@assets": assetsDir,
    },
  },
  plugins: [vue(), manifestPlugin()],
  publicDir,
  build: {
    outDir,
    rollupOptions: {
      // 这些都是入口
      input: {
        content: resolve(root, "content", "index.ts"),
        background: resolve(root, "background", "index.ts"),
        popup: resolve(root, "popup", "index.html"),
        newtab: resolve(root, "newtab", "index.html"),
        devtools: resolve(root, "devtools", "index.html"),
        options: resolve(root, "options", "index.html"),
      },
      output: {
        entryFileNames: "src/[name]/index.js",
      },
    },
  },
});

import { defineConfig } from "vite";
import path, { resolve } from "path";

const root = resolve(__dirname, "src");
const assetsDir = resolve(root, "assets");
const pages = resolve(root, "pages");
const outDir = resolve(__dirname, "dist");
// const publicDir = resolve(__dirname, "public");

export default defineConfig({
  resolve: {
    alias: {
      "@src": root,
      "@pages": pages,
      "@assets": assetsDir,
    },
  },
  build: {
    outDir,
    rollupOptions: {
      // 这些都是入口
      input: {
        content: resolve(pages, "content", "index.ts"),
        background: resolve(pages, "background", "index.ts"),
        popup: resolve(pages, "popup", "index.html"),
        newtab: resolve(pages, "newtab", "index.html"),
        devtools: resolve(pages, "devtools", "index.html"),
        options: resolve(pages, "options", "index.html"),
      },
      output: {
        entryFileNames: "src/pages/[name]/index.js",
        chunkFileNames: "assets/js/[name].[hash].js",
        assetFileNames: (assetInfo) => {
          console.log(assetInfo);
          return `assets/[ext]/${assetInfo.name}.chunk.[ext]`;
        },
      },
    },
  },
});

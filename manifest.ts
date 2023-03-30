import packageJson from "./package.json";
import { ManifestType } from "./manifest-type";

const manifest: ManifestType = {
  manifest_version: 3,
  name: packageJson.name,
  version: packageJson.version,
  description: packageJson.description,
  options_page: "src/options/index.html",
  background: { service_worker: "src/background/index.js" },
  action: {
    default_popup: "src/popup/index.html",
    default_icon: "assets/icon-34.png",
  },
  chrome_url_overrides: {
    newtab: "src/newtab/index.html",
  },
  icons: {
    "128": "assets/icon-128.png",
  },
  content_scripts: [
    {
      matches: ["http://*/*", "https://*/*", "<all_urls>"],
      js: ["src/content/index.js"],
      css: ["src/content/index.css"],
    },
  ],
  devtools_page: "src/devtools/index.html",
  web_accessible_resources: [
    {
      resources: ["assets/*"],
      matches: ["<all_urls>"],
    },
  ],
};

export default manifest;

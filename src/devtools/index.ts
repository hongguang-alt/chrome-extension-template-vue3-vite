import { createApp } from "vue";
import App from "./App.vue";

try {
  chrome.devtools.panels.create(
    "Dev Tools Demo",
    "icon-34.png",
    "src/devtools/index.html"
  );
} catch (e) {
  console.error(e);
}

createApp(App).mount("#app");

import { createApp } from "vue";
import App from "./App.vue";

// 부트스트랩5
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

// vue-router4
import router from "./router";

createApp(App).use(router).mount("#app");
// createApp(App).mount("#app");

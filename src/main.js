import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/main.css";

const app = createApp(App);

app.use(router);

app.mount("#app");
import PrimeVue from "primevue/config";

import "./assets/main.css";

app.use(PrimeVue);


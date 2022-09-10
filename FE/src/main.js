import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import PrimeVue from "primevue/config";
import "./assets/main.scss";

const app = createApp(App);

import prime from "./plugins/prime";
prime(app);

app.use(router);
app.use(PrimeVue);
app.mount("#app");

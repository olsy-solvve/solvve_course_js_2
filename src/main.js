import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/main.css";


const app = createApp(App);

import prime from "./plagins/prime";
prime(app);

app.use(router);

app.mount("#app");

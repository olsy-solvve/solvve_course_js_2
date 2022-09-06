import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import PrimeVue from "primevue/config";
import Card from "primevue/card";
import Button from "primevue/button";
import "./assets/main.css";

const app = createApp(App);

app.use(router);
app.use(PrimeVue);
app.component("Card", Card);
app.component("Button", Button);
app.mount("#app");

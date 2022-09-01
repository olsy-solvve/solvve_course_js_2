import { createApp } from "vue";
import PrimeVue from 'primevue/config';
import router from "./router";

import App from "./App.vue";
import "./assets/main.css";
import "primevue/resources/themes/saga-blue/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";

const app = createApp(App);

app.use(PrimeVue, {ripple: true});

app.use(router);
app.use(PrimeVue);


app.mount("#app");

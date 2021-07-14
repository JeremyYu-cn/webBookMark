import { createApp } from "vue";
import App from "./App.vue";
import router from "@/router/index";
import store from "@/store/index";

console.log(import.meta.env.BASE_URL);

const app = createApp(App);

app.use(router);
app.use(store);

app.mount("#app");

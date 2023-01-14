import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import "./style.css";

const app = createApp(App);

app.provide('STORAGE_KEY', 'jcs_lsh_todoslist');
app.use(router);

app.mount("#app");

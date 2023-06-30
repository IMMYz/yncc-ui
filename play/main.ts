import { createApp } from "vue";
import App from "./app.vue";
import yncc from "@yncc/components"

const app = createApp(App);
app.use(yncc)
app.mount("#app");

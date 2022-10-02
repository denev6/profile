import { createApp } from "vue";
import App from "./App";
import router from "./router";
import TitleComp from "@/components/view/TitleComp";

const app = createApp(App);
app.component("TitleComp", TitleComp);
app.use(router);
app.mount("#app");

import { createApp } from 'vue'
import App from './App.vue'
import router from "./router.js"
import BaseView from "./components/pages/BaseView.vue";

const app = createApp(App)
app.component("BaseView", BaseView)
app.use(router).mount('#app')
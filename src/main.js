import './scss/main.scss'
import store from "@/store/index.js";

import App from './App.vue'
import {createApp} from "vue";

let app = createApp(App)
app.use(store)
app.mount('#app')

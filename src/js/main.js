import '@/scss/main.scss'
import store from "@/store";

import App from '@/js/App.vue'
import {createApp} from "vue";

store.axios = axios;

let app = createApp(App)
app.use(store)
app.mount('#app')

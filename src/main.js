import { createApp } from 'vue'
import './style.css'
import { Quasar } from 'quasar'
import { createPinia } from 'pinia';
import '@quasar/extras/material-icons/material-icons.css'
import 'quasar/src/css/index.sass'
import App from './App.vue'
import router from './router'

const myApp = createApp(App)

myApp.use(router)
myApp.use(createPinia());
myApp.use(Quasar, {
    plugins: {},
})

myApp.mount('#app')

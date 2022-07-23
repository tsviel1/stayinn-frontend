import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import './styles/styles.scss'
import VueGoogleMaps from '@fawmi/vue-google-maps'

import 'element-plus/dist/index.css'
import { clickOutsideDirective } from './directives'
// import {keyDB} from './assets/google-key.js'

const app = createApp(App)
app.directive('click-outside', clickOutsideDirective)
app.use(router)

app.use(VueGoogleMaps, {
    load: {
        key: "key"
    },
})
app.use(store)
app.use(ElementPlus)
app.mount('#app')

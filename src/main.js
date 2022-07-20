import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

<<<<<<< HEAD
import "./styles/styles.scss"
=======
import './styles/styles.scss'
>>>>>>> bdf822e03d5833a3608ffb71c87de3c61e9aedb9

const app = createApp(App)

app.use(router)
app.use(store)
app.use(ElementPlus)
app.mount('#app')

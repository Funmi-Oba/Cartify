import { createApp } from 'vue'
import { createPinia } from 'pinia'
import Toast from 'vue-toastification'
import 'vue-toastification/dist/index.css'

import App from './App.vue'
import router from './router'

const app = createApp(App)
const pinia = createPinia()
app.use(pinia)
app.use(router)
app.use(Toast, {
  position: 'top-center',        // top-right, top-left, bottom-right, bottom-left, top-center, bottom-center
  timeout: false,                // ms, set to false to disable auto close
  closeOnClick: false,           // close when clicked
//  pauseOnHover: true,           // pause timer on hover
  draggable: false,              // drag to dismiss
  showCloseButtonOnHover: false,// only show close button on hover
  closeButton: 'button',        // show close button
  icon: true,                   // show icon
  rtl: false,
})

app.mount('#app')

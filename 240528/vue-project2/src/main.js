import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import ProductBox from './components/ProductBox.vue'

createApp(App)
.component('ProductBox',ProductBox)
.mount('#app')

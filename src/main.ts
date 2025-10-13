import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

import AOS from 'aos'
import 'aos/dist/aos.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')

// 初始化 AOS 並在每次路由切換後重新刷新動畫
AOS.init({
  duration: 800, // 動畫時間
  once: true, // 滾動時只執行一次
})

router.afterEach(() => {
  AOS.refresh()
})

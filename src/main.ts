// @ts-ignore

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { CommonMixin, setBaseUrl, loadIconScripts } from '@ly-js/ui'
// import '~@ly-js/scroll/es/components/scroll/style.scss'
// import 'element-plus/theme-chalk/index.css'
// import '@ly-js/scroll/dist/index.css'
// import '@ly-js/scroll/es/index.css'

setBaseUrl('https://www.lfeng.top')
loadIconScripts([
  '//at.alicdn.com/t/font_2392320_8shvya0stko.js',
  '//at.alicdn.com/t/font_2776842_w2g6gr94ny.js'
])

createApp(App)
  .use(router)
  .mixin(CommonMixin)
  .mount('#app')

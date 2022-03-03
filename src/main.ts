import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { CommonMixin, setBaseUrl } from '@ly-js/ui'
// import '~@ly-js/scroll/es/components/scroll/style.scss'
// import 'element-plus/theme-chalk/index.css'
// import '@ly-js/scroll/dist/index.css'
// import '@ly-js/scroll/es/index.css'

setBaseUrl('https://www.lfeng.top')

createApp(App).use(router).mixin(CommonMixin).mount('#app')

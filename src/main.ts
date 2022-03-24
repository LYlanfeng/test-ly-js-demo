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
import { createStore, Store } from 'vuex'

// 创建一个新的 store 实例
const store = createStore({
  state() {
    return {
      count: 0
    }
  },
  mutations: {
    increment(state: number) {
      state.count++
    }
  }
})

const app = createApp(App)
  .use(store)
  .use(router)
  .mixin(CommonMixin)
  .mount('#app')

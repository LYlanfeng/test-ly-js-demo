import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { CommonMixin, setBaseUrl } from '@ly-js/ui'

setBaseUrl('https://www.lfeng.top')

createApp(App).use(router).mixin(CommonMixin).mount('#app')

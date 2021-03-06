/// <reference types="vite/client" />
/// <reference types="vue/macros-global" />
/// <reference types="element-plus/global" />
/// <reference types="@ly-js/ui/global" />
/// <reference types="@ly-js/element/global" />
/// <reference types="unplugin-vue-define-options" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>
  export default component
}

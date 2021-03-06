import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import DefineOptions from 'unplugin-vue-define-options/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import { LyUIResolver } from '@ly-js/ui/resolver'
import { LyEUIResolver } from '@ly-js/element/resolver'
import { LyVUIResolver } from '@ly-js/vant/resolver'
import { LyScrollResolver } from '@ly-js/scroll/resolver'

const TestResolver = () => {
  return [
    {
      type: 'component',
      resolve(name) {
        console.log('\n 解析组件：', name)
      }
    },
    {
      type: 'directive',
      resolve(name) {
        console.log('\n 解析指令：', name)
      }
    }
  ]
}
// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [
      {
        find: '@',
        replacement: resolve(__dirname, 'src')
      }
    ]
  },
  server: {
    port: 8080
  },
  plugins: [
    DefineOptions(),
    AutoImport({
      imports: ['vue'],
      eslintrc: {
        enabled: true, // Default `false`
        filepath: './.eslintrc-auto-import.json', // Default `./.eslintrc-auto-import.json`
        globalsPropValue: true // Default `true`, (true | false | 'readonly' | 'readable' | 'writable' | 'writeable')
      },
      dts: 'src/auto-imports.d.ts',
      resolvers: [ElementPlusResolver()]
    }),
    Components({
      dts: false,
      resolvers: [
        // @ts-ignore
        TestResolver(),
        ElementPlusResolver(),
        LyUIResolver(),
        LyScrollResolver({
          importStyle: 'sass' // sass
        }),
        LyEUIResolver({
          importStyle: 'sass' // sass
        }),
        LyVUIResolver()
      ]
    }),
    vueJsx(),
    vue({
      reactivityTransform: true
    })
  ]
})

import { App, Plugin } from 'vue'
import { camelize } from '@ly-js/utils'

// https://github.com/youzan/vant/issues/8302
type EventShim = {
  new (...args: any[]): {
    $props: {
      onClick?: (...args: any[]) => void
    }
  }
}

export type WithInstall<T> = T & {
  install(app: App): void
} & EventShim

export function withInstall<T>(options: T) {
  ;(options as Record<string, unknown>).install = (app: App) => {
    const { name } = options as unknown as { name: string }
    app.component(name, options)
    app.component(camelize(`-${name}`), options)
  }

  return options as WithInstall<T>
}

export type DirectiveWithInstall<T> = T & Plugin

export function directiveWithInstall<T>(name: string, options: T) {
  ;(options as Record<string, unknown>).install = (app: App) => {
    app.directive(name, options)
  }

  return options as DirectiveWithInstall<T>
}

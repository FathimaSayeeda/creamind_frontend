import { Plugin } from '@nuxt/types'

declare module 'vue/types/vue' {
  interface Vue {
    $asyncSleep: (t: number) => Promise<void>
    $debounce: (func: (...args: any) => any, timeout: number) => void
  }
}

const asyncSleepPlugin: Plugin = (ctx, inject) => {
  inject(
    'asyncSleep',
    (t: number) =>
      new Promise((res) => {
        setTimeout(res, t)
      })
  )

  inject('debounce', function <
    Params extends any[]
  >(func: (...args: Params) => any, timeout: number): (
    ...args: Params
  ) => void {
    let timer: NodeJS.Timeout
    return (...args: Params) => {
      clearTimeout(timer)
      timer = setTimeout(() => {
        func(...args)
      }, timeout)
    }
  })
}

export default asyncSleepPlugin

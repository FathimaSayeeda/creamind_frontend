import { Plugin } from '@nuxt/types'

declare module 'vue/types/vue' {
  interface Vue {
    $asyncSleep: (t: number) => Promise<void>
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
}

export default asyncSleepPlugin

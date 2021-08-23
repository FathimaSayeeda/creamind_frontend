import colors from 'vuetify/es5/util/colors'
import { getRoutes } from './routes'

const polyfillFeatures = [
  'fetch',
  'Object.entries',
  'IntersectionObserver',
].join('%2C');

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - thecreamind-frontend',
    title: 'The Crea Mind - there is no telling what a Crea Mind kid can do.',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    scripts: [
      { src: `https://polyfill.io/v3/polyfill.min.js?features=${polyfillFeatures}`, body: true },
    ]
  },

  // Static site generation
  generate: {
    routes: getRoutes,
    concurrency: 10,
    interval: 0,
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/style/main.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/asyncSleep.ts',
    '~/plugins/vue-swiper.ts',
    '~/plugins/frappeclient.ts',
    '~/plugins/vue-googlemaps.ts',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify'
  ],

  'google-gtag': {
    id: process.env.GA4_MEASUREMENT_ID,
    config: {
      anonymize_ip: true, // anonymize IP 
      send_page_view: true, // might be necessary to avoid duplicated page track on page reload
    },
    debug: false,
    disableAutoPageTrack: false
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://http.nuxtjs.org
    '@nuxt/http',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://github.com/nuxt-community/google-gtag-module
    '@nuxtjs/google-gtag'
  ],

  // @nuxt/http configs

  http: {
    baseURL: process.env.THECREAMIND_API,
    headers: {
      // frappe sends in text/html by default
      "Accept": "application/json",
      // https://frappeframework.com/docs/user/en/api/rest#1-token-based-authentication
      // "Authorization": `token ${process.env.CRAWLER_KEY}:${process.env.CRAWLER_SECRET}`
    }
  },

  publicRuntimeConfig: {
    THECREAMIND_API: process.env.THECREAMIND_API,
    GMAPS_API_KEY: process.env.GMAPS_API_KEY
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        },
      },
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  // 0.0.0.0 so that LAN devices could access the sites
  server: {
    host: '0.0.0.0',
  },
}

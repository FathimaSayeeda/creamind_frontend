import 'vue-googlemaps/dist/vue-googlemaps.css'

// @ts-ignore
import VueGoogleMaps from 'vue-googlemaps'
import Vue from 'vue'

// @ts-ignore
export default ({ $config: { GMAPS_API_KEY } }) => {
  Vue.use(VueGoogleMaps, {
    load: {
      apiKey: GMAPS_API_KEY,
      libraries: ['places'],
    },
  })
}


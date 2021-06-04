<template>
  <v-app>
    <Navbar />
    <v-main>
      <Nuxt />
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import Vue from 'vue'
import Navbar from './partials/Navbar.vue'
import Footer from './partials/Footer.vue'

export default Vue.extend({
  components: {
    Navbar,
    Footer,
  },
})
</script>
<style>
#app {
  background: #f5eaeb;
}
</style>

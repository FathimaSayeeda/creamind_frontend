<template>
  <div>
    <Home></Home>
    <Featured></Featured>
    <About></About>
    <Activities></Activities>
    <Testimonials></Testimonials>
  </div>
</template>

<script>
import Home from '~/components/Home.vue'
import About from '~/components/About.vue'
import Featured from '~/components/Featured.vue'
import Activities from '~/components/Activities.vue'
import Testimonials from '~/components/Testimonials.vue'
export default {
  components: {
    Home,
    About,
    Featured,
    Activities,
    Testimonials,
  },
}
</script>

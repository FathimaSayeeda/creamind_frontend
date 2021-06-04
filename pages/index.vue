<template>
  <div>
    <Home></Home>
    <Featured></Featured>
    <About></About>
    <Activities></Activities>
  </div>
</template>

<script>
import Home from '~/components/Home.vue'
import About from '~/components/About.vue'
import Featured from '~/components/Featured.vue'
import Activities from '~/components/Activities.vue'
export default {
  components: {
    Home,
    About,
    Featured,
    Activities,
  },
}
</script>

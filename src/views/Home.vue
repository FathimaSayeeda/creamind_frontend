<template>
  <container class="home">
    <carousel/>   
  </container>
</template>

<script>
// @ is an alias to /src
import carousel from "@/components/carousel.vue";


export default {
  name: "home",
  components: {
        carousel, 
           
  }
};
</script>

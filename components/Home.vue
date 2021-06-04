<template>
  <div class="home">
    <v-row no-gutters
      ><v-spacer class="hidden-sm-and-down"></v-spacer
      ><v-col class="ml-15" cols="6" md="3"
        ><div class="tagline">
          There is no telling what a
          <img :src="require('~/assets/creamind.svg')" /> kid can do.
        </div>
        <!-- <div class="text-h5">Explore our wide range of Genres</div> -->
        <v-btn rounded large class="mt-5 pa-5" width="200px" color="#60a6ad"
          >Explore.</v-btn
        ></v-col
      ><v-spacer class="hidden-sm-and-down"></v-spacer>
      <v-spacer class="hidden-sm-and-down"></v-spacer>
      <v-col cols="6"
        ><img
          class="landing-image my-15 mx-10"
          width="80%"
          :src="require('~/assets/landing.svg')" /></v-col
    ></v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
}
</script>

<style scoped lang="scss">
.home {
  height: 81vh;
}
.tagline {
  font-size: 40px;
  font-weight: 400px;
  font-family: 'Nexa-Bold';
  color: black;
  margin-top: 100px;
  // @media (max-width: 600px) {
  //   font-size: 20px;
  // }
}
.carousel {
  height: 100%;
}
.landing-image {
  transform: rotateY(180deg);
}
</style>

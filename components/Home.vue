<template>
  <div class="home" style="position: relative">
    <v-row no-gutters
      ><v-spacer class="hidden-sm-and-down"></v-spacer
      ><v-col class="ml-5 ml-sm-15 mt-xl-16 pt-xl-16" cols="6" md="3"
        ><div class="tagline">
          There is no telling what a
          <img :src="require('~/assets/creamind.svg')" /> kid can do.
        </div>
        <!-- <div class="text-h5">Explore our wide range of Genres</div> -->
        <nuxt-link class="nuxt-link" :to="{ path: '/books' }"
          ><v-btn
            outlined
            tile
            large
            class="main-button mt-5 pa-5"
            width="200px"
            color="#099094"
            >Explore.</v-btn
          ></nuxt-link
        ></v-col
      ><v-spacer class="hidden-sm-and-down"></v-spacer>
      <v-spacer class="hidden-sm-and-down"></v-spacer>
      <v-col cols="6"
        ><img
          class="landing-image my-md-15 mx-md-10"
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
  height: calc(100vh - 110px);
  @media (max-width: 960px) {
    height: calc(100vh - 80px);
  }
}
.tagline {
  width: 350px;
  font-size: 40px;
  font-weight: 400px;
  font-family: 'Nexa-Bold';
  color: black;
  margin-top: 100px;
  @media (max-width: 400px) {
    font-size: 18px;
    width: 200px;
    line-height: 2;
    margin-top: 40px;
  }
  @media (min-width: 401px) and (max-width: 600px) {
    font-size: 23px;
    width: 200px;
    line-height: 2;
  }
  @media (min-width: 601px) and (max-width: 750px) {
    font-size: 25px;
    width: 230px;
    line-height: 2;
  }
  @media (min-width: 751px) and (max-width: 960px) {
    line-height: 2;
    width: 300px;
    font-size: 30px;
  }
}
.carousel {
  height: 100%;
}
.landing-image {
  transform: rotateY(180deg);
  @media (max-width: 600px) {
    width: 300px;
    position: absolute;
    right: 10px;
    bottom: 40px;
  }
  @media (min-width: 601px) and (max-width: 750px) {
    width: 350px;
    position: absolute;
    right: 10px;
    bottom: 40px;
  }
  @media (min-width: 751px) and (max-width: 960px) {
    width: 450px;
    position: absolute;
    right: 10px;
    bottom: 40px;
  }
}
::v-deep.main-button {
  font-size: 16px !important;
  font-family: 'Nexa-Bold';
  border: 3px solid #099094;
}
::v-deep.main-button:hover {
  background-color: black;
  border: 3px solid black;
  font-family: 'Nexa-Black';
}
.nuxt-link {
  text-decoration: none;
}
</style>

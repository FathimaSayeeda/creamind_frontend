<template>
  <v-app dark>
    <div v-if="error.statusCode === 404">
      <div class="d-flex justify-center">
        <v-img
          height="65vh"
          :contain="true"
          :src="require('~/assets/404.svg')"
        ></v-img>
      </div>
      <br />
      <div class="error-message d-flex justify-center mt-n16">
        {{ pageNotFound }}
      </div>
      <nuxt-link class="d-flex justify-center nuxt-link" :to="{ path: '/' }"
        ><v-btn
          outlined
          tile
          large
          class="main-button mt-5 pa-5"
          width="200px"
          color="#099094"
          >TAKE ME HOME.</v-btn
        ></nuxt-link
      >
    </div>
    <div v-else>
      <div class="d-flex justify-center">
        <v-img
          height="65vh"
          :contain="true"
          :src="require('~/assets/other-error.svg')"
        ></v-img>
      </div>
      <br />
      <div class="error-message d-flex justify-center mt-n16">
        {{ otherError }}
      </div>
      <!-- <nuxt-link class="d-flex justify-center nuxt-link" :to="{ path: '/' }"
        ><v-btn
          outlined
          tile
          large
          class="main-button mt-5 pa-5"
          width="200px"
          color="#099094"
          >TAKE ME HOME.</v-btn
        ></nuxt-link
      > -->
    </div>
  </v-app>
</template>

<script>
export default {
  layout: 'empty',
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      pageNotFound:
        "Oops! we can't find what you are looking for. May be we could just show you around?  ",
      otherError: 'An error occurred',
    }
  },
  head() {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    return {
      title,
    }
  },
}
</script>

<style scoped>
.error-message {
  font-family: 'Nexa-Bold';
  font-size: 20px;
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

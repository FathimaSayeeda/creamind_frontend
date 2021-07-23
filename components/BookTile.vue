<template>
  <v-card
    light
    max-width="230"
    max-height="320px"
    class="featured-card mx-5 my-5"
  >
    <v-img :src="getUrl(book.title_image)" class="book-image" height="200px"></v-img>

    <marquee width="80%" height="50%" class="ml-5"
      ><v-card-title class="card-title">
        {{ book.title }}
      </v-card-title></marquee
    >

    <v-card-subtitle class="mt-n10">
      {{ book.sub_title || book.author }}
    </v-card-subtitle>

    <nuxt-link :to="{ path: '/book/' + book.slug }" class="nuxt-link"
      ><v-btn class="explore text-right ml-10" color="orange lighten-2" icon>
        Explore<v-icon>mdi-chevron-right</v-icon>
      </v-btn></nuxt-link
    >
  </v-card>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: ['book'],
  methods: {
    getUrl(url: string) {
      return this.$config.THECREAMIND_API + url
    }
  }
})
</script>

<style scoped lang="scss">
.card-title {
  font-size: 15px;
}
.featured-card {
  @media (max-width: 600px) {
    width: 150px;
  }
}
.featured-card:hover {
  transform: scale(1.1);
  transition: 1s;
}
.explore {
  font-size: 12px;
}
.nuxt-link {
  text-decoration: none;
}
</style>

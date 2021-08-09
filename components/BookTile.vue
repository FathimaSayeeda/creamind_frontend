<template>
  <nuxt-link :to="{ path: '/book/' + book.slug }" class="nuxt-link"
    ><v-card
      light
      width="230"
      max-height="320px"
      class="featured-card mx-2 mx-sm-5 my-5"
    >
      <v-img
        :src="$frappe.getUrl(book.title_image)"
        class="book-image"
        height="200px"
      ></v-img>

      <marquee width="80%" height="50%" class="ml-5"
        ><v-card-title class="card-title">
          {{ book.title }}
        </v-card-title></marquee
      >

      <v-card-subtitle
        v-if="subtitle.length >= 25"
        class="card-subtitle ml-5 mt-n10"
      >
        <marquee width="100%" height="30%"> {{ subtitle }}</marquee>
      </v-card-subtitle>
      <v-card-subtitle v-else class="card-subtitle mt-n10">
        {{ subtitle }}
      </v-card-subtitle>
    </v-card>
  </nuxt-link>
</template>

<script>
import Vue from 'vue'
export default Vue.extend({
  props: ['book'],
  computed: {
    subtitle: function () {
      return (
        this.book.sub_title ||
        (this.book.author && this.book.author.title) ||
        (this.book.publisher && this.book.publisher.title) ||
        ''
      )
    },
  },
})
</script>

<style scoped lang="scss">
.card-title {
  font-size: 15px;
}
// ::v-deep.card-subtitle {
//   font-size: 12px !important;
// }
// .featured-card {
//   // @media (max-width: 300px) {
//   //   width: 43vw !important;
//   // }
//   @media (max-width: 600px) {
//     width: 150px;
//   }
//   // @media (min-width: 601px) and (max-width: 800px) {
//   //   width: 350px !important;
//   // }
// }
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

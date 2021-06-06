<template>
  <v-responsive max-width="1300px" class="margined white--text mx-sm-auto">
    <div class="featured">
      <h1 class="featured-title px-6 px-sm-16 pt-10">Featured Books</h1>
      <v-row no-gutters class="justify-center mx-sm-2 mx-md-16 my-10"
        ><v-spacer></v-spacer
        ><v-col v-for="book in books" :key="book.name" cols="6" sm="3">
          <v-card
            light
            max-width="300"
            class="featured-card mb-2 mb-sm-5 mb-md-auto mx-3 mx-md-5"
          >
            <v-img :src="book.img" class="book-image" height="200px"></v-img>

            <marquee width="80%" height="10%" class="ml-5"
              ><v-card-title class="card-title">
                {{ book.name }}
              </v-card-title></marquee
            >

            <v-card-subtitle class="mt-n5 mb-n3 pt-0 pb-2">
              {{ book.genre }}
            </v-card-subtitle>

            <v-card-actions class="hidden-sm-and-down">
              <v-btn
                class="text-right ml-10"
                color="orange lighten-2"
                icon
                @click="show = !show"
              >
                Explore<v-icon>{{
                  show ? 'mdi-chevron-left' : 'mdi-chevron-right'
                }}</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card></v-col
        ><v-spacer></v-spacer
      ></v-row>
    </div>
  </v-responsive>
</template>

<script>
import Vue from 'vue'
export default Vue.extend({
  data() {
    return {
      show: false,
      books: [
        {
          name: "Charlotte's Web",
          genre: 'Fiction',
          img: require('~/assets/templatebook1.jpg'),
        },
        {
          name: 'Pigeon',
          genre: 'Fiction',
          img: require('~/assets/templatebook2.jpg'),
        },
        {
          name: 'Roald Dahl Matilda',
          genre: 'Fiction',
          img: require('~/assets/templatebook3.jpg'),
        },
        {
          name: 'The cat in the hat',
          genre: 'Fiction',
          img: require('~/assets/templatebook4.png'),
        },
      ],
    }
  },
})
</script>
<style scoped lang="scss">
.card-title {
  font-size: 15px;
}
.featured-title {
  font-size: 30px;
  font-family: 'Nexa-Bold';
  color: black;
  @media (max-width: 600px) {
    font-size: 25px;
  }
  @media (min-width: 601px) and (max-width: 960px) {
    font-size: 27px;
  }
}
// .featured-card {
//   @media (max-width: 600px) {
//   }
// }

.featured-card:hover {
  transform: scale(1.1);
  transition: 1s;
}
</style>

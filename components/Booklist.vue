<template>
  <v-responsive max-width="1300px" class="margined white--text mx-auto">
    <div class="featured">
      <v-row no-gutters class="justify-center mx-16"
        ><v-spacer></v-spacer
        ><v-col v-for="book in books" :key="book.name" cols="6" sm="6" md="3">
          <v-card
            light
            max-width="230"
            max-height="320px"
            class="featured-card mx-5 my-5"
          >
            <v-img :src="book.img" class="book-image" height="200px"></v-img>

            <marquee width="80%" height="50%" class="ml-5"
              ><v-card-title class="card-title">
                {{ book.name }}
              </v-card-title></marquee
            >

            <v-card-subtitle class="mt-n10"> {{ book.genre }} </v-card-subtitle>

            <nuxt-link :to="{ path: '/book/' + book.name }" class="nuxt-link"
              ><v-btn
                class="explore text-right ml-10"
                color="orange lighten-2"
                icon
                @click="show = !show"
              >
                Explore<v-icon>{{
                  show ? 'mdi-chevron-left' : 'mdi-chevron-right'
                }}</v-icon>
              </v-btn></nuxt-link
            >
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
          name: 'Roald Dahl Matilda',
          genre: 'Fiction',
          img: require('~/assets/templatebook3.jpg'),
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
        {
          name: 'The cat in the hat',
          genre: 'Fiction',
          img: require('~/assets/templatebook4.png'),
        },
        {
          name: 'Roald Dahl Matilda',
          genre: 'Fiction',
          img: require('~/assets/templatebook3.jpg'),
        },
        {
          name: 'Roald Dahl Matilda',
          genre: 'Fiction',
          img: require('~/assets/templatebook3.jpg'),
        },
        {
          name: "Charlotte's Web",
          genre: 'Fiction',
          img: require('~/assets/templatebook1.jpg'),
        },
        {
          name: 'The cat in the hat',
          genre: 'Fiction',
          img: require('~/assets/templatebook4.png'),
        },
        {
          name: "Charlotte's Web",
          genre: 'Fiction',
          img: require('~/assets/templatebook1.jpg'),
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

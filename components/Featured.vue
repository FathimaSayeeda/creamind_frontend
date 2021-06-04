<template>
  <v-responsive max-width="1300px" class="margined white--text mx-auto">
    <div class="featured">
      <h1 class="featured-title px-16 pt-10">Featured Books</h1>
      <v-row no-gutters class="justify-center mx-16 my-10"
        ><v-spacer></v-spacer
        ><v-col v-for="book in books" :key="book.name" cols="12" sm="6" md="3">
          <v-card light max-width="300" class="featured-card mx-5">
            <v-img :src="book.img" class="book-image" height="200px"></v-img>

            <v-card-title class="card-title"> {{ book.name }} </v-card-title>

            <v-card-subtitle> {{ book.genre }} </v-card-subtitle>

            <v-card-actions>
              <v-btn color="orange lighten-2" text> Explore </v-btn>

              <v-spacer></v-spacer>

              <v-btn icon @click="show = !show">
                <v-icon>{{
                  show ? 'mdi-chevron-up' : 'mdi-chevron-down'
                }}</v-icon>
              </v-btn>
            </v-card-actions>

            <v-expand-transition>
              <div v-show="show">
                <v-divider></v-divider>

                <v-card-text>
                  I'm a thing. But, like most politicians, he promised more than
                  he could deliver. You won't have time for sleeping, soldier,
                  not with all the bed making you'll be doing. Then we'll go
                  with that data file! Hey, you add a one and two zeros to that
                  or we walk! You're going to do his laundry? I've got to find a
                  way to escape.
                </v-card-text>
              </div>
            </v-expand-transition>
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
}
.featured-card:hover {
  transform: scale(1.1);
  transition: 1s;
}
</style>

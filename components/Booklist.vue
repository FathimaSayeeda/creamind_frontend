<template>
  <v-responsive max-width="1300px" class="margined white--text mx-auto">
    <div class="featured">
      <v-row no-gutters class="justify-center mx-16"
        ><v-spacer></v-spacer
        ><v-col v-for="book in books" :key="book.name" cols="12" sm="6" md="3">
          <v-card light max-width="300" class="featured-card mx-5 my-5">
            <v-img :src="book.img" class="book-image" height="200px"></v-img>

            <v-card-title class="card-title"> {{ book.name }} </v-card-title>

            <v-card-subtitle> {{ book.genre }} </v-card-subtitle>

            <v-card-actions>
              <v-btn color="orange lighten-2" text> Explore </v-btn>

              <v-spacer></v-spacer>

              <v-btn icon @click="show = !show">
                <v-img width="30px" :src="require('~/assets/showdetails.svg')">
                </v-img>
              </v-btn>
            </v-card-actions> </v-card></v-col
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
.featured-card:hover {
  transform: scale(1.1);
  transition: 1s;
}
</style>

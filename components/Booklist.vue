<template>
  <v-responsive max-width="1300px" class="margined white--text mx-auto">
    <div class="featured">
      <v-row no-gutters class="justify-center mx-16"
        ><v-spacer></v-spacer>
        <v-col v-for="book in books" :key="book.name" cols="6" sm="6" md="3">
          <BookTile></BookTile>
        </v-col>
        <v-spacer></v-spacer
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
<style scoped lang="scss"></style>

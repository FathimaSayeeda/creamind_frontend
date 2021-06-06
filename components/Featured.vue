<template>
  <v-responsive max-width="1300px" class="margined white--text mx-sm-auto">
    <div class="featured">
      <h1 class="featured-title px-6 px-sm-16 pt-10">Featured Books</h1>
      <v-row no-gutters class="justify-center mx-sm-2 mx-md-16 my-10"
        ><v-spacer></v-spacer
        ><v-col v-for="book in books" :key="book.name" cols="6" sm="3">
          <BookTile :book="book"></BookTile> </v-col
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
          sub_title: 'Fiction',
          img: require('~/assets/templatebook1.jpg'),
        },
        {
          name: 'Pigeon',
          sub_title: 'Fiction',
          img: require('~/assets/templatebook2.jpg'),
        },
        {
          name: 'Roald Dahl Matilda',
          sub_title: 'Fiction',
          img: require('~/assets/templatebook3.jpg'),
        },
        {
          name: 'The cat in the hat',
          sub_title: 'Fiction',
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

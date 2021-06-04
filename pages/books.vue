<template>
  <div>
    <div class="books-section-title d-flex justify-center">
      Choose the perfect book for your kid.
    </div>
    <v-row class="justify-center mx-md-16 mx-10 px-md-16 my-md-5"
      ><v-col cols="12" md="6">
        <v-text-field
          label="Search"
          placeholder="Search by a keyword!"
          rounded
          outlined
          color="#D22D43"
        ></v-text-field></v-col
    ></v-row>

    <div class="d-flex justify-center">
      <v-btn
        text
        color="#099094"
        dark
        @click="
          show = !show
          isShowing ^= true
        "
        class="mt-md-n10 advanced-search"
      >
        Advanced Search
        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
        <!-- <v-img
          width="12px"
          class="mx-4"
          :src="require('~/assets/dropdown.svg')"
        ></v-img> -->
      </v-btn>
    </div>

    <v-row
      v-show="isShowing"
      width="80vw"
      class="flex-column flex-md-row justify-center mx-16 px-md-16 mt-md-2"
      ><v-col cols="12" md="2">
        <v-col>Search by</v-col>
      </v-col>
      <v-col cols="12" md="2" class="my-n4 my-md-auto">
        <v-autocomplete
          dense
          label="Category"
          placeholder="Category"
          rounded
          outlined
          color="#D22D43"
        ></v-autocomplete>
      </v-col>
      <v-col cols="12" md="2" class="my-n4 my-md-auto">
        <v-autocomplete
          dense
          label="Author"
          placeholder="Author"
          rounded
          outlined
          color="#D22D43"
        ></v-autocomplete>
      </v-col>
      <v-col cols="12" md="2" class="my-n4 my-md-auto">
        <v-autocomplete
          dense
          label="Publisher"
          placeholder="Publisher"
          rounded
          outlined
          color="#D22D43"
        ></v-autocomplete>
      </v-col>
      <v-col cols="12" md="2" class="my-n4 my-md-auto">
        <v-autocomplete
          dense
          label="Series"
          placeholder="Series"
          rounded
          outlined
          color="#D22D43"
        ></v-autocomplete>
      </v-col>
      <v-col cols="12" md="2" class="my-n4 my-md-auto">
        <v-autocomplete
          dense
          label="Age group"
          rounded
          outlined
          color="#D22D43"
        ></v-autocomplete> </v-col
    ></v-row>
    <Booklist></Booklist>
  </div>
</template>

<style scoped>
.v-label {
  color: black;
}
.advanced-search {
  text-transform: capitalize;
}
.books-section-title {
  font-family: 'Nexa-Bold';
  font-size: 30px;
}
</style>

<script>
import Vue from 'vue'
export default Vue.extend({
  data() {
    return {
      show: false,
      isShowing: false,

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
      ],
    }
  },
})
</script>

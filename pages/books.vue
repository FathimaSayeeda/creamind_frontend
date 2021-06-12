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
        <!-- <v-title_image
          width="12px"
          class="mx-4"
          :src="require('~/assets/dropdown.svg')"
        ></v-title_image> -->
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
    <v-responsive max-width="1300px" class="margined white--text mx-auto">
      <div class="featured">
        <v-row no-gutters class="justify-center mx-16"
          ><v-spacer></v-spacer>
          <v-col v-for="book in books" :key="book.name" cols="6" sm="6" md="3">
            <BookTile :book="book"></BookTile>
          </v-col>
          <v-spacer></v-spacer
        ></v-row>
      </div>
    </v-responsive>
  </div>
</template>

<style scoped lang="scss">
.v-label {
  color: black;
}
.advanced-search {
  text-transform: capitalize;
}
.books-section-title {
  font-family: 'Nexa-Bold';
  font-size: 30px;
  @media (max-width: 600px) {
    font-size: 20px;
    margin: 20px auto;
  }
}
</style>

<script lang="ts">
import { Component, Action, Vue } from 'nuxt-property-decorator'
import { CursorPaginator, GQLResponse } from '~/plugins/frappeclient'
import { BookNode, SearchBooksParams } from '~/store/books'

@Component({})
export class BooksPage extends Vue {
  show = false
  isShowing = false

  @Action('books/searchBooks')
  searchBooks!: (
    args: SearchBooksParams
  ) => Promise<CursorPaginator<BookNode>>

  async fetch() {
    // @ts-ignore
    const bookCursor = await this.searchBooks({
      first: 10,
      filter: [{fieldname: "title_image", operator: "NEQ", value: ''}]
    })
    this.books = bookCursor.edges.map((x) => x.node)
  }

  mounted() {
    console.log("ENV:", this.$config.THECREAMIND_API)
  }

  async fetchBooks() {

  }

  books: BookNode[] = []
}

export default BooksPage
</script>

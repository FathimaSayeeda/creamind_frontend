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

<script lang="ts">
import { Vue, Component, Action } from 'nuxt-property-decorator'
import { BookNode } from '~/store/types'

@Component({})
export class FeaturedBooks extends Vue {
  books: BookNode[] = []

  @Action('books/getFeaturedBooks')
  getFeaturedBooks!: () => Promise<BookNode[]>

  async fetch() {
    this.books = await this.getFeaturedBooks()
  }
}

export default FeaturedBooks
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

<template>
  <div>
    <v-row class="mb-6">
      <v-spacer></v-spacer
      ><v-col cols="12" sm="6" md="5" class="ml-md-16 my-8">
        <v-carousel
          light
          hide-delimiter-background
          delimiter-icon="mdi-minus"
          height="60vh"
        >
          <v-carousel-item v-for="(m, i) in book.media" :key="i">
            <v-sheet height="100%" tile>
              <v-row class="fill-height" align="center" justify="center">
                <v-img
                  height="60vh"
                  width="300px"
                  :src="$frappe.getUrl(m.media_url)"
                  :contain="true"
                ></v-img>
              </v-row>
            </v-sheet>
          </v-carousel-item> </v-carousel></v-col
      ><v-spacer></v-spacer
      ><v-col cols="12" sm="6" class="px-4 mt-sm-6 px-md-16 mt-md-10"
        ><div class="book-title">{{ book.name }}</div>
        <div class="subtitle">{{ book.subtitle }}</div>

        <v-row class="mt-md-5 details justify-start"
          ><v-col cols="3"
            ><div>Series</div>
            <div>Author</div>
            <div>Publisher</div>
            <div>Categories</div>
            <div>Age group</div></v-col
          ><v-col cols="1"
            ><div>-</div>
            <div>-</div>
            <div>-</div>
            <div>-</div>
            <div>-</div></v-col
          ><v-col
            ><div>{{ book.series }}</div>
            <div>{{ (book.author || {}).title }}</div>
            <div>{{ (book.publisher || {}).title }}</div>
            <div>{{ book.categories }}</div>
            <div>{{ book.agegroups }}</div></v-col
          ></v-row
        >
        <!-- <div class="mt-md-5 subtitle">Book Description</div> -->
        <v-row class="mt-md-5 details justify-start"
          ><v-col cols="3"
            ><div>Type</div>
            <div>No. of pages</div>
            <div>Retail Price</div> </v-col
          ><v-col cols="1"
            ><div>-</div>
            <div>-</div>
            <div>-</div> </v-col
          ><v-col
            ><div>{{ book.type }}</div>
            <div>{{ book.pages }}</div>
            <div>{{ book.price }}</div>
          </v-col></v-row
        >
        <!-- <v-btn outlined color="#099094" class="mt-10 pa-5"
          >Rent the book now!</v-btn
        > -->
        <div class="main_button mt-5 mt-lg-8">RENT THE BOOK NOW.</div>
      </v-col></v-row
    ><v-img
      class="hidden-sm-and-down pennants"
      width="150px"
      :src="require('~/assets/pennants.svg')"
    ></v-img>
    <v-img
      class="hidden-sm-only friends"
      width="150px"
      :src="require('~/assets/high-five.svg')"
    ></v-img>
  </div>
</template>
<script lang="ts">
import { Component, Action, Vue } from 'nuxt-property-decorator'
import { BookNode } from '~/store/types'

@Component({})
export class BookPage extends Vue {
  book: BookNode = {
    author: {},
    publisher: {}
  } as BookNode
  bookLoaded = false

  @Action('blowUrl')
  blowUrl!: (url: string) => string

  @Action('books/getBook')
  getBook!: (slug: string) => Promise<BookNode | null>

  async fetch() {
    this.bookLoaded = false;
    const slug = this.$route.params.id
    // console.info('Loading Book', slug)
    const book = await this.getBook(slug)
    if (!book) {
      // redirect 404
      return
    }
    this.book = book;
    this.bookLoaded = true;
  }
}

export default BookPage
</script>
<style scoped lang="scss">
::v-deep.v-btn__content {
  background-color: green !important;
}
.book-title {
  font-size: 30px;
  font-family: 'Nexa-Black';
}
.subtitle {
  font-size: 18px;
  font-family: 'Nexa-Regular';
}
.details {
  font-family: 'Nexa-Bold';
  font-size: 16px;
  line-height: 1.5;
}
.main_button {
  border: 3px solid #099094;
  color: black;
  font-family: 'Nexa-Bold';
  letter-spacing: 1px;
  padding: 10px 10px 5px 10px;
  width: 230px;
  font-size: 14px;
  text-align: center;
}
.main_button:hover {
  background-color: black;
  color: #41b0b4;
  border: 3px solid black;
  cursor: pointer;
}
.pennants {
  position: absolute;
  top: 0;
  right: 0;
}
.friends {
  position: absolute;
  bottom: 2px;
  right: 20px;
  @media (max-width: 600px) {
    right: 10px;
    width: 100px !important;
  }
}
</style>

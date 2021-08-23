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

        <div class="mt-md-5 details">
          <!-- Author -->
          <v-row v-if="book.author">
            <v-col cols="3">Author</v-col>
            <v-col cols="1">-</v-col>
            <v-col cols="8">{{ book.author.title }}</v-col>
          </v-row>
          <!-- Publisher -->
          <v-row v-if="book.publisher">
            <v-col cols="3">Publisher</v-col>
            <v-col cols="1">-</v-col>
            <v-col cols="8">{{ book.publisher.title }}</v-col>
          </v-row>
          <!-- Book Series -->
          <v-row v-if="book.book_series">
            <v-col cols="3">Book Series</v-col>
            <v-col cols="1">-</v-col>
            <v-col cols="8">{{ book.book_series.title }}</v-col>
          </v-row>
          <!-- Categories -->
          <v-row class="mt-3" v-if="book.categories">
            <v-col>
              Categories
              <v-chip-group column>
                <v-chip v-for="(g, i) in book.categories" :key="i">
                  {{ g.book_category.title }}
                </v-chip>
              </v-chip-group>
            </v-col>
          </v-row>
          <!-- Age Groups -->
          <v-row class="mt-3" v-if="book.age_groups">
            <v-col>
            AGE GROUPS
            <v-chip-group column>
              <v-chip :ripple="false" v-for="(g, i) in book.age_groups" :key="i">
                {{ g.age_group.title }}
              </v-chip>
            </v-chip-group>
            </v-col>
          </v-row>
          <v-row
            v-if="book.description"
            class="mt-5"
            style="white-space: pre-wrap; line-height: 1.2em"
            ><v-col>{{ book.description }}</v-col></v-row
          >
        </div>
        <!-- <v-btn outlined color="#099094" class="mt-10 pa-5"
          >Rent the book now!</v-btn
        > -->
        <!-- <div class="main_button mt-5 mt-lg-8">RENT THE BOOK NOW.</div> -->
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
    publisher: {},
  } as BookNode
  bookLoaded = false

  @Action('blowUrl')
  blowUrl!: (url: string) => string

  @Action('books/getBook')
  getBook!: (slug: string) => Promise<BookNode | null>

  async fetch() {
    this.bookLoaded = false
    const slug = this.$route.params.id
    // console.info('Loading Book', slug)
    const book = await this.getBook(slug)
    if (!book) {
      // redirect 404
      return
    }
    this.book = book
    this.bookLoaded = true
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
  line-height: 1;

  .row {
    margin-top: 0.1em;
  }
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

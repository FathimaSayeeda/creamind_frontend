<template>
  <div>
    <div class="books-section-title d-flex justify-center">
      Choose the perfect book for your kid.
    </div>
    <v-row class="justify-center mx-md-16 mx-10 px-md-16 my-md-5"
      ><v-col cols="12" md="6">
        <v-text-field
          label="Search"
          @input="searchFilterChanged"
          v-model="filters.title"
          placeholder="Search by a keyword!"
          outlined
          color="#D22D43"
        ></v-text-field></v-col
    ></v-row>

    <div class="d-flex justify-center">
      <v-btn
        text
        color="#099094"
        dark
        @click="showAdvancedFilters = !showAdvancedFilters"
        class="mt-md-n10 advanced-search"
      >
        Advanced Search
        <v-icon>{{
          showAdvancedFilters ? 'mdi-chevron-up' : 'mdi-chevron-down'
        }}</v-icon>
        <!-- <v-title_image
          width="12px"
          class="mx-4"
          :src="require('~/assets/dropdown.svg')"
        ></v-title_image> -->
      </v-btn>
    </div>

    <v-row
      v-show="showAdvancedFilters"
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
          outlined
          color="#D22D43"
          :loading="loading.bookCategories"
          item-text="title"
          item-value="name"
          :items="autoCompleteData.bookCategories"
          v-model="filters.bookCategory"
          @change="searchFilterChanged"
          @update:search-input="
            autoCompleteChanged('searchCategories', 'bookCategories', $event)
          "
        ></v-autocomplete>
      </v-col>
      <v-col cols="12" md="2" class="my-n4 my-md-auto">
        <v-autocomplete
          dense
          label="Author"
          placeholder="Author"
          outlined
          color="#D22D43"
          :loading="loading.authors"
          item-text="title"
          item-value="name"
          v-model="filters.author"
          :items="autoCompleteData.authors"
          @change="searchFilterChanged"
          @update:search-input="
            autoCompleteChanged('searchAuthors', 'authors', $event)
          "
        ></v-autocomplete>
      </v-col>
      <v-col cols="12" md="2" class="my-n4 my-md-auto">
        <v-autocomplete
          dense
          label="Publisher"
          placeholder="Publisher"
          outlined
          color="#D22D43"
          :loading="loading.publishers"
          item-text="title"
          item-value="name"
          v-model="filters.publisher"
          :items="autoCompleteData.publishers"
          @change="searchFilterChanged"
          @update:search-input="
            autoCompleteChanged('searchPublishers', 'publishers', $event)
          "
        ></v-autocomplete>
      </v-col>
      <v-col cols="12" md="2" class="my-n4 my-md-auto">
        <v-autocomplete
          dense
          label="Series"
          placeholder="Series"
          outlined
          color="#D22D43"
          :loading="loading.bookSeries"
          item-text="title"
          item-value="name"
          v-model="filters.bookSeries"
          :items="autoCompleteData.bookSeries"
          @change="searchFilterChanged"
          @update:search-input="
            autoCompleteChanged('searchBookSeries', 'bookSeries', $event)
          "
        ></v-autocomplete>
      </v-col>
      <v-col cols="12" md="2" class="my-n4 my-md-auto">
        <v-autocomplete
          dense
          label="Age group"
          outlined
          color="#D22D43"
          :loading="loading.ageGroups"
          item-text="title"
          item-value="name"
          v-model="filters.ageGroups"
          :items="autoCompleteData.ageGroups"
          @change="searchFilterChanged"
          @update:search-input="
            autoCompleteChanged('searchAgeGroups', 'ageGroups', $event)
          "
        ></v-autocomplete> </v-col
    ></v-row>
    <v-responsive max-width="1300px" class="margined white--text mx-auto">
      <div class="featured">
        <v-row no-gutters class="justify-center mx-md-16">
          <v-spacer class="hidden-sm-and-down"></v-spacer>
          <v-overlay :value="loading.books">
            <v-progress-circular indeterminate size="64"></v-progress-circular>
          </v-overlay>
          <v-col v-for="book in books" :key="book.slug" cols="6" sm="6" md="3">
            <BookTile :book="book"></BookTile>
          </v-col>
          <v-spacer v-intersect.quiet="pageScrollBottom"></v-spacer>
          <!-- <v-progress-linear
            v-if="loading.books"
            class="my-2"
            indeterminate
          ></v-progress-linear> -->
        </v-row>
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
import {
  AgeGroup,
  Author,
  BaseNode,
  BookCategory,
  BookNode,
  BookSeries,
  Publisher,
} from '~/store/types'
import { SearchBooksParams } from '~/store/books'
import { DebounceDecorator } from '~/utils/debounce'

@Component({})
export class BooksPage extends Vue {
  loading: { [x: string]: boolean } = {
    books: false,
    authors: false,
    bookCategories: false,
    publishers: false,
    bookSeries: false,
    ageGroups: false,
  }
  autoCompleteData: {[x: string]: BaseNode[] } = {}
  filters = {}
  books: BookNode[] = []
  lastBookLoaded: string = ''
  timeOuts: { [x: string]: NodeJS.Timeout | null } = { }
  showAdvancedFilters = false

  @Action('books/searchBooks')
  searchBooks!: (args: SearchBooksParams) => Promise<CursorPaginator<BookNode>>

  @Action('authors/searchAuthors')
  searchAuthors!: (txt?: string) => Promise<Author[]>

  @Action('bookCategories/searchCategories')
  searchCategories!: (txt?: string) => Promise<BookCategory[]>

  @Action('publishers/searchPublishers')
  searchPublishers!: (txt?: string) => Promise<Publisher[]>

  @Action('bookSeries/searchBookSeries')
  searchBookSeries!: (txt?: string) => Promise<BookSeries[]>

  @Action('ageGroups/searchAgeGroups')
  searchAgeGroups!: (txt?: string) => Promise<AgeGroup[]>

  async fetch() {
    await Promise.all([this.loadMoreBooks()])
    do {
      await new Promise((r) => setTimeout(r, 1000))
    } while (Object.values(this.loading).some((x) => x))
  }

  pageScrollBottom() {
    this.loadMoreBooks()
  }

  async loadMoreBooks() {
    if (this.loading.books) {
      return
    }
    this.loading.books = true
    // console.info('Loading books after', this.lastBookLoaded)
    const bookCursor = await this.searchBooks({
      first: 12,
      after: this.lastBookLoaded,
      filter: [{ fieldname: 'title_image', operator: 'NEQ', value: '' }],
    })
    this.lastBookLoaded = bookCursor.pageInfo.endCursor
    // console.info('Loaded till', this.lastBookLoaded)

    this.books.push(...bookCursor.edges.map((x) => x.node))
    this.loading.books = false
  }

  async searchFilterChanged(txt: string) {
    if (this.timeOuts.books) {
      clearTimeout(this.timeOuts.books)
    }
    this.timeOuts.books = setTimeout(() => {
      console.log(this.filters)
      // this.lastBookLoaded = '';
      // this.loadMoreBooks();
    }, 1000)
  }

  autoCompleteChanged(
    searchMethod: string,
    typeName: any,
    $event: string
  ) {
    if (!process.client) {
      return
    }
    if (this.timeOuts[typeName]) {
      if (this.autoCompleteData[typeName]?.length > 0) {
        clearTimeout(this.timeOuts[typeName]!)
      } else {
        return;
      }
    }

    this.timeOuts[typeName] = setTimeout(async () => {
      this.loading[typeName] = true
      // @ts-ignore
      this.autoCompleteData[typeName] = await this[searchMethod]($event)
      this.loading[typeName] = false
      this.timeOuts[typeName] = null;
    }, 750);
  }
}

export default BooksPage
</script>

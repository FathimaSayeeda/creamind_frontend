<template>
  <div>
    <section class="hero">
      <div class="container">
        <div class="title">
          Books your kids will hold close to heart!! </div>
       
      </div>
    </section>
    <section class="container filters level">
      <div class="level-left">
        <div class="level-item">
          <b-field label="Book Title">
            <b-input
              v-model="filterTitle"
              placeholder="Search by Title"
            ></b-input>
          </b-field>
        </div>
        <div class="level-item">
          <b-field label="Author">
            <b-input
              v-model="filterAuthor"
              placeholder="Search by Author"
            ></b-input>
          </b-field>
        </div>
      </div>
    </section>
    <section class="tile is-ancestor">
      <b-loading :active.sync="isLoading"></b-loading>
      <div class="tile is-child is-3" v-for="(book, idx) in books" :key="idx">
        <BookListItem :book="book" />
      </div>
    </section>
  </div>
</template>

<script>
import { debounce, getBaseUrl } from "../utils";
import BookListItem from "../components/BookListItem";

export default {
  components: {
    BookListItem
  },
  data: function() {
    return {
      isLoading: false,
      filterTitle: "",
      filterAuthor: "",
      books: [],
      authors: null
    };
  },
  mounted() {
    this.refetchBooks();
  },
  methods: {
    refetchBooks: debounce(async function() {
      this.isLoading = true;

      // when authors array exists and it is empty, we have no books!
      if (this.authors !== null && this.authors.length == 0) {
        this.books = [];
        this.isLoading = false;
        return;
      }

      const qp = [];
      if (this.authors !== null) {
        for (const author of this.authors) {
          qp.push(`author_in=${author.id}`);
        }
      }
      if (this.filterTitle) {
        qp.push(`title_contains=${this.filterTitle}`);
      }
      const books = await fetch(
        `${getBaseUrl()}/books${qp.length ? "?" + qp.join("&") : ""}`
      ).then(r => r.json());
      this.books = books;
      this.isLoading = false;
    }, 500),
    refetchAuthors: debounce(async function() {
      this.isLoading = true;
      if (!this.filterAuthor) {
        this.authors = null;
        this.refetchBooks();
        return;
      }
      const authors =
        (await fetch(
          `${getBaseUrl()}/authors?Name_contains=${this.filterAuthor}`
        ).then(r => r.json())) || [];
      this.authors = authors;
      this.refetchBooks();
    }, 500)
  },
  watch: {
    filterTitle: function() {
      this.refetchBooks();
    },
    filterAuthor: function() {
      this.refetchAuthors();
    }
  }
};
</script>

<style lang="scss" scoped>
.filters {
  margin-top: 3em;
  color:crimson;
}

.title{
  font-size: 50px !important;
}
</style>

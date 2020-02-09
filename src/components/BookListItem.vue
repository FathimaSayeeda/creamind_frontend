<template>
  <div class="book-card">
    <img class="book-cover" :src="getImgUrl(book.coverImage)" />
    <h2 class="book-title">{{ book.title }}</h2>
    <p class="book-para">{{ book.description }}</p>
  </div>
</template>

<script>
import { getBaseUrl } from "../utils";
export default {
  props: ["book"],
  methods: {
    getImgUrl(img) {
      if (!img) {
        return "nan";
      }
      return `${getBaseUrl()}${img.url}`;
    }
  }
};
</script>

<style lang="scss" scoped>
.book-card {
  margin: 0.5em;
  display: block !important;
  border: 1px solid #dcdcdc;
  padding: 0.5em;
  text-align: center;
  height: 350px;
  box-shadow: 0 0.5em 1em -0.125em rgba(10, 10, 10, 0.1),
    0 0 0 1px rgba(10, 10, 10, 0.02);

  overflow: hidden;
  text-overflow: ellipsis;
}
.book-cover {
  max-height: 150px;
}
.book-title {
  padding: 0.5em;
  font-size: 1.5em;
}
.book-para {
}
</style>

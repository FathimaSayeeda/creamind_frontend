<template>
  <div>
    <v-row class="mb-6">
      <v-spacer></v-spacer
      ><v-col cols="12" sm="6" md="5" class="ml-md-16 my-8">
        <v-carousel
          light
          hide-delimiter-background
          delimiter-icon="mdi-minus"
          v-model="model"
          height="60vh"
        >
          <v-carousel-item v-for="(image, i) in images" :key="i">
            <v-sheet height="100%" tile>
              <v-row class="fill-height" align="center" justify="center">
                <v-img
                  height="60vh"
                  width="300px"
                  :src="images[i]"
                  :contain="true"
                ></v-img>
              </v-row>
            </v-sheet>
          </v-carousel-item> </v-carousel></v-col
      ><v-spacer></v-spacer
      ><v-col
        cols="12"
        sm="6"
        v-for="book in books"
        :key="book.name"
        class="px-4 mt-sm-6 px-md-16 mt-md-10"
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
            <div>{{ book.author }}</div>
            <div>{{ book.publisher }}</div>
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
<script>
import Vue from 'vue'
export default Vue.extend({
  data() {
    return {
      id: this.$route.params.id,
      books: [
        {
          name: "Charlotte's Web",
          subtitle: 'Subtitle',
          author: 'Lauren Child',
          publisher: 'Tiger Aspect',
          series: 'Charlie and Lola',
          categories: 'Cartoon Series',
          agegroups: '5-6 years, 3-4 years',
          type: 'paperback',
          pages: '24',
          price: '₹290($3.99)',
        },
      ],
      images: [
        require('~/assets/templatebook1.jpg'),
        require('~/assets/book-img2.png'),
        require('~/assets/book-img3.png'),
        require('~/assets/book-img4.png'),
      ],
    }
  },
})
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

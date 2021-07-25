<template>
  <div id="testimonials">
    <div class="test-title d-flex justify-center">
      Here's why Parents choose
    </div>
    <div class="d-flex mt-4 mb-8 justify-center">
      <img
        class="mb-2 mx-md-3"
        :src="require('~/assets/thecreamind-text.svg')"
      />
    </div>
    <div class="testimonials d-flex justify-center pb-14">
      <swiper
        ref="mySwiper"
        :options="swiperOptions"
        class="swiper-container py-4"
      >
        <swiper-slide
          v-for="(testimonial, i) in testimonials"
          :key="i"
          class="swiper-slide"
          ><v-card class="test-card py-8">
            <img
              width="35px"
              class="quotes-start"
              :src="require('~/assets/quotes.svg')"
            />
            <img
              width="35px"
              class="quotes-end"
              :src="require('~/assets/quotes.svg')"
            />
            <div class="d-flex flex-no-wrap justify-space-between">
              <div>
                <div class="mx-10">{{ testimonial.text }}</div>
                <hr class="line" />

                <v-img
                  class="circle mt-3 mx-10"
                  :contain="true"
                  :src="testimonial.avatar"
                ></v-img>

                <div class="mx-10 activity-sub" v-text="testimonial.name"></div>
              </div>
            </div> </v-card
        ></swiper-slide>

        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data() {
    return {
      testimonials: [
        {
          name: 'John Doe',
          avatar: require('~/assets/avatar-1.svg'),
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,',
        },
        {
          name: 'Jane Doe',
          avatar: require('~/assets/avatar-2.svg'),
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,',
        },
        {
          name: 'John T. Doe',
          avatar: require('~/assets/avatar-3.svg'),
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,',
        },
        {
          name: 'Jane T. Doe',
          avatar: require('~/assets/avatar-4.svg'),
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,',
        },
      ],
      swiperOptions: {
        slidesPerView: 3.1,
        spaceBetween: 10,
        freeMode: true,
        breakpoints: {
          250: {
            slidesPerView: 1.2,
            spaceBetween: 10,
          },
          450: {
            slidesPerView: 1.5,
            spaceBetween: 10,
          },
          600: {
            slidesPerView: 1.6,
            spaceBetween: 10,
          },

          960: {
            slidesPerView: 1.9,
            spaceBetween: 10,
          },
          1300: {
            slidesPerView: 2.5,
            spaceBetween: 10,
          },
          2000: {
            slidesPerView: 3.1,
            spaceBetween: 10,
          },
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        // Some Swiper option/callback...
      },
    }
  },
})
</script>

<style scoped lang="scss">
.swiper-container {
  // height: 300px;
  padding: 50px auto;
  margin: auto 15vw;
  @media (max-width: 600px) {
    margin: auto 3vw;
  }
}
.swiper-slide {
  position: relative;
}
.test-title {
  font-size: 30px;
  font-family: 'Nexa-Bold';
  color: black;
}
.test-title {
  font-size: 30px;
  font-family: 'Nexa-Bold';
  @media (max-width: 600px) {
    font-size: 25px;
  }
  @media (min-width: 601px) and (max-width: 960px) {
    font-size: 27px;
  }
}

// ::v-deep.v-card {
//   height: 500px !important;
// }

// ::v-deep.v-card {
//   width: 1000px !important;
// }
// ::v-deep.v-carousel,
// .v-sheet {
//   height: 450px !important;
//   width: 800px !important;
//   background: transparent !important;
//   @media (max-width: 600px) {
//     height: 60vh !important;
//     width: 90vw !important;
//   }
//   @media (min-width: 601px) and (max-width: 960px) {
//     height: 62vh !important;
//     width: 85vw !important;
//   }
// }

.circle {
  width: 3em;
  height: 3em;
  border-radius: 50%;
  border: 2px solid rgb(127, 177, 174);

  background-color: white;
}
.testimonials {
  color: black;
  font-family: 'Nexa-Bold';
  font-size: 14px;
  text-align: justify;
}
.test-text {
  @media (max-width: 600px) {
    font-size: 14px;
  }
}
.name {
  font-family: 'Nexa-Black';
}
.outer {
  background-color: #a7d9dd;
  height: 400px;
  width: 800px;
  border-radius: 25px;
  @media (max-width: 600px) {
    height: 60vh !important;
    width: 90vw !important;
  }
  @media (min-width: 601px) and (max-width: 960px) {
    height: 62vh !important;
    width: 85vw !important;
  }
}
// .inner {
//   background-color: transparent;
//   height: 100px;
//   width: 100px;

//   border-radius: 50px;
//   border: 1px solid #d22d43;
//   position: absolute;
// @media (max-width: 600px) {
//   height: 55vh !important;
//   width: 85vw !important;
// }
// @media (min-width: 601px) and (max-width: 960px) {
//   height: 55vh !important;
//   width: 80vw !important;
// }
// }
.quotes-start {
  position: absolute;
  left: 30px;
  top: -20px;
  color: red;
}
.quotes-end {
  position: absolute;
  right: 30px;
  bottom: -20px;
  transform: rotate(180deg);
}

hr {
  display: block;
  height: 1px;
  border: 0;
  border-top: 1px solid rgb(226, 224, 224);
  margin: 1.5em 3em;
  padding: 0;
}
</style>

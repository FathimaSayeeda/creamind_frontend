<template>
  <div id="testimonials">
    <v-responsive max-width="1300px" class="margined mx-auto">
      <div class="testimonials pb-14">
        <h1 class="test-title px-6 px-sm-10 px-md-16 pt-10">Testimonials</h1>
        <v-row no-gutters class="justify-center">
          <v-carousel
            light
            hide-delimiters
            show-arrows-on-hover
            v-model="model"
          >
            <v-carousel-item
              v-for="testimonial in testimonials"
              :key="testimonial.name"
            >
              <v-sheet tile>
                <div class="pt-md-5 d-flex justify-center">
                  <div class="outer d-flex justify-center align-center">
                    <div class="inner">
                      <img
                        width="70px"
                        class="quotes-start"
                        :src="require('~/assets/quotes.svg')"
                      />
                      <img
                        width="70px"
                        class="quotes-end"
                        :src="require('~/assets/quotes.svg')"
                      />

                      <div class="d-flex justify-center">
                        <img class="mt-10 circle" :src="testimonial.avatar" />
                      </div>
                      <div class="name d-flex justify-center">
                        {{ testimonial.name }}
                      </div>
                      <div
                        class="
                          mx-5 mx-sm-10 mx-md-16
                          px-md-10
                          mt-6 mt-md-11
                          d-flex
                          justify-center
                        "
                      >
                        {{ testimonial.text }}
                      </div>
                    </div>
                  </div>
                </div>
              </v-sheet>
            </v-carousel-item>
          </v-carousel></v-row
        >
      </div>
    </v-responsive>
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
    }
  },
})
</script>

<style scoped lang="scss">
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
::v-deep.v-carousel,
.v-sheet {
  height: 450px !important;
  width: 800px !important;
  background: transparent !important;
  @media (max-width: 600px) {
    height: 60vh !important;
    width: 90vw !important;
  }
  @media (min-width: 601px) and (max-width: 960px) {
    height: 62vh !important;
    width: 85vw !important;
  }
}

.circle {
  width: 5em;
  height: 5em;
  border-radius: 50%;
  border: 2px solid rgb(116, 233, 227);

  background-color: white;
}
.testimonials {
  color: black;
  font-family: 'Nexa-Regular';

  line-height: 2;
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
.inner {
  background-color: transparent;
  height: 360px;
  width: 760px;
  border-radius: 25px;
  border: 3px solid #d22d43;
  position: relative;
  @media (max-width: 600px) {
    height: 55vh !important;
    width: 85vw !important;
  }
  @media (min-width: 601px) and (max-width: 960px) {
    height: 55vh !important;
    width: 80vw !important;
  }
}
.quotes-start {
  position: absolute;
  left: 30px;
  top: -40px;
}
.quotes-end {
  position: absolute;
  right: 30px;
  bottom: -40px;
  transform: rotate(180deg);
}
</style>

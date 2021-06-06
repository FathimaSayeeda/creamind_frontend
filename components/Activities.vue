<template>
  <div id="activities">
    <div class="activities pb-16">
      <v-responsive max-width="1300px" class="margined mb-16 mx-auto">
        <div class="activities-title px-16 pt-10">
          Our Activities
        </div></v-responsive
      >
      <swiper
        ref="mySwiper"
        max-width="10000px"
        :options="swiperOptions"
        class="ps-16"
      >
        <swiper-slide
          v-for="(activity, i) in activities"
          :key="i"
          class="swiper-slide"
          ><v-card class="activity-card py-10" height="150px">
            <div class="d-flex flex-no-wrap justify-space-between">
              <div>
                <v-avatar class="ma-3" size="60" rounded="">
                  <v-img
                    class="clip-circle ma-16"
                    :contain="true"
                    :src="activity.icon"
                  ></v-img>
                </v-avatar>
                <!-- <hr /> -->
                <v-card-title class="activity-name"
                  ><div class="mr-3">{{ activity.name1 }}</div>
                  <div>{{ activity.name2 }}</div></v-card-title
                >

                <v-card-subtitle
                  class="activity-sub"
                  v-text="activity.name1"
                ></v-card-subtitle>
              </div>
            </div> </v-card
        ></swiper-slide>

        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>

      <!-- <v-row dense class="d-flex flex-nowrap pt-md-5">
        <v-col v-for="(activity, i) in activities" :key="i" cols="10" md="3">
          <v-card class="acitivity-card py-10" height="250px">
            <div class="d-flex flex-no-wrap justify-space-between">
              <div>
                <v-avatar class="ma-3" size="60" rounded="">
                  <v-img
                    class="clip-circle ma-16"
                    :contain="true"
                    :src="activity.icon"
                  ></v-img>
                </v-avatar>
                <hr />
                <v-card-title class="activity-name"
                  ><div class="mr-3">{{ activity.name1 }}</div>
                  <div>{{ activity.name2 }}</div></v-card-title
                >

                <v-card-subtitle
                  class="activity-sub"
                  v-text="activity.name1"
                ></v-card-subtitle>
              </div>
            </div>
          </v-card>
        </v-col>
      </v-row> -->
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
export default Vue.extend({
  name: 'carrousel',
  data() {
    return {
      swiperOptions: {
        slidesPerView: 7.25,
        spaceBetween: 10,
        freeMode: true,
        breakpoints: {
          250: {
            slidesPerView: 1.2,
            spaceBetween: 10,
          },
          450: {
            slidesPerView: 2.6,
            spaceBetween: 10,
          },
          600: {
            slidesPerView: 3.4,
            spaceBetween: 10,
          },

          960: {
            slidesPerView: 5,
            spaceBetween: 10,
          },
          1300: {
            slidesPerView: 5.3,
            spaceBetween: 10,
          },
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        // Some Swiper option/callback...
      },
      activities: [
        {
          name1: 'Library Services',
          name2: '',
          icon: require('~/assets/library.svg'),
        },
        {
          name1: 'On-demand ',
          name2: 'Bookstore',
          icon: require('~/assets/ondemand.svg'),
        },
        {
          name1: 'Theme-based',
          name2: 'activity workshops',
          icon: require('~/assets/workshops.svg'),
        },
        {
          name1: 'Self grooming ',
          name2: 'for kids',
          icon: require('~/assets/grooming.svg'),
        },
        {
          name1: 'Free Guidance session ',
          name2: 'for parents',
          icon: require('~/assets/guidance.svg'),
        },
        {
          name1: 'Educational',
          name2: 'Toy store',
          icon: require('~/assets/toystore.svg'),
        },
        {
          name1: 'Competitions',
          name2: ' (Quizzes, etc.)',
          icon: require('~/assets/competitions.svg'),
        },
        {
          name1: 'Skill Development',
          icon: require('~/assets/skill.svg'),
        },
        {
          name1: 'Self Development',
          icon: require('~/assets/selfdev.svg'),
        },
        {
          name1: 'Educational Aids',
          icon: require('~/assets/aids.svg'),
        },
        {
          name1: 'Summer Camps',
          icon: require('~/assets/camps.svg'),
        },
      ],
    }
  },
})
</script>

<style scoped lang="scss">
.activities-title {
  font-size: 30px;
  font-family: 'Nexa-Bold';
  color: black;
}

.activity-card:hover {
  border: 3px solid #099094;
}
.activity-name,
.activity-sub {
  font-family: 'Nexa-Bold';
}
.activity-name {
  font-size: 20px;
}
.clip-circle {
  width: 90px;
  height: 90px;
  clip-path: circle(45px at center);
  border-color: black;
}
hr {
  display: block;
  height: 1px;
  border: 0;
  border-top: 1px solid rgb(226, 224, 224);
  margin: -1em 3em;
  padding: 0;
}
</style>

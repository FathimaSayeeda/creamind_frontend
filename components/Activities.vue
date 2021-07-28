<template>
  <div>
    <a class="anchor" id="activities"></a>
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
                  ><div class="mr-3">{{ activity.title }}</div>
                </v-card-title>

                <v-card-subtitle
                  class="activity-sub"
                  v-text="activity.subtitle"
                ></v-card-subtitle>
              </div>
            </div> </v-card
        ></swiper-slide>

        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
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
          title: 'Library Services',
          subtitle: 'Well facilitated library for kids.',
          icon: require('~/assets/library.svg'),
        },
        {
          title: 'Bookstore ',
          subtitle: 'Books added on demand.',
          icon: require('~/assets/ondemand.svg'),
        },
        {
          title: 'Workshops',
          subtitle: 'Theme based activity workshops.',
          icon: require('~/assets/workshops.svg'),
        },
        {
          title: 'Grooming ',
          subtitle: 'Self-grooming for kids.',
          icon: require('~/assets/grooming.svg'),
        },
        {
          title: 'Guidance Sessions ',
          subtitle: 'Free guidance sessions for parents.',
          icon: require('~/assets/guidance.svg'),
        },
        {
          title: 'Toy store',
          subtitle: 'Collection of educational toys.',
          icon: require('~/assets/toystore.svg'),
        },
        {
          title: 'Competitions',
          subtitle: 'Quizzes, et cetera.',
          icon: require('~/assets/competitions.svg'),
        },
        {
          title: 'Skill Development',
          subtitle: 'BAsic skill development classes.',
          icon: require('~/assets/skill.svg'),
        },
        {
          title: 'Self Development',
          subtitle: 'Self Development workshops.',
          icon: require('~/assets/selfdev.svg'),
        },
        {
          title: 'Educational Aids',
          subtitle: "Aiding your kid's education.",
          icon: require('~/assets/aids.svg'),
        },
        {
          title: 'Summer Camps',
          subtitle: 'Summer camps for kids.',
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
  background-color: #f0d8d9;
}
.activity-name,
.activity-sub {
  font-family: 'Nexa-Bold';
}
.activity-name {
  font-size: 20px;
  line-height: 1;
  @media (max-width: 600px) {
    font-size: 13px;
  }
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
a.anchor {
  display: block;
  position: relative;
  top: -150px;
  visibility: hidden;
}
</style>

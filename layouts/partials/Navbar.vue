<template>
  <div class="navbar">
    <v-navigation-drawer v-model="drawer" temporary fixed color="#f5eaeb" right>
      <v-list dense>
        <v-list-item v-for="item in items" :key="item.title" :to="item.link">
          <v-list-item-content>
            <v-list-item-title class="nav-item">{{
              item.title
            }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      color="#f5eaeb"
      justify="center"
      fixed
      prominent
      elevate-on-scroll
      flat
      dense
      app
      :height="$vuetify.breakpoint.mdAndUp ? 110 : 80"
    >
      <v-toolbar-title class="mx-md-1 mx-lg-10 pb-2 pb-md-4">
        <kinesis-container>
          <kinesis-element :strength="20" type="depth">
            <img
              :width="logoWidth"
              class="mx-auto"
              :src="require('~/assets/creamind-logo.svg')"
            />
          </kinesis-element>
        </kinesis-container>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items
        class="
          left
          mx-2
          me-md-8
          nav-item
          custom-transform-class
          hidden-sm-and-down
        "
      >
        <nuxt-link :to="{ path: '/', hash: '/' }" class="nuxt-link"
          ><v-btn class="ms-md-8 nav-button text-capitalize rtl" text
            >HOME</v-btn
          ></nuxt-link
        >
        <nuxt-link :to="{ path: '/', hash: '#about' }" class="nuxt-link"
          ><v-btn class="ms-md-8 nav-button text-capitalize rtl" text
            >ABOUT</v-btn
          ></nuxt-link
        >
        <nuxt-link :to="{ path: '/', hash: '#activities' }" class="nuxt-link"
          ><v-btn class="ms-md-8 nav-button text-capitalize rtl" text
            >ACTIVITIES</v-btn
          ></nuxt-link
        >
        <nuxt-link :to="{ path: '/', hash: '#contact' }" class="nuxt-link"
          ><v-btn class="ms-md-8 nav-button text-capitalize rtl" text
            >CONTACT</v-btn
          ></nuxt-link
        >
        <nuxt-link :to="{ path: 'books' }" class="nuxt-link"
          ><v-btn class="ms-md-8 nav-button text-capitalize rtl" text
            >BOOKS<v-img
              width="16px"
              :src="require('~/assets/right-arrow.svg')"
              class="pa-3 mt-n1 ms-2"
            ></v-img></v-btn
        ></nuxt-link>
        <!-- <v-btn
          v-for="item in items"
          :key="item.title"
          class="ms-md-8 nav-button text-capitalize rtl"
          color="black"
          text
          :to="item.hash"
          >{{ item.title }}</v-btn
        > -->
      </v-toolbar-items>
      <div class="hidden-md-and-up mt-n5">
        <v-app-bar-nav-icon
          color="#49576E"
          @click="drawer = !drawer"
        ></v-app-bar-nav-icon>
      </div>
    </v-app-bar>
  </div>
</template>
<script>
import Vue from 'vue'
export default Vue.extend({
  data() {
    return {
      drawer: false,
      items: [
        { title: 'HOME', hash: '/' },
        { title: 'ABOUT', hash: '#about' },
        { title: 'ACTIVITIES', hash: '#activities' },
        { title: 'CONTACT', hash: '#contact' },
        { title: 'BOOKS', hash: 'books' },
      ],
    }
  },
  computed: {
    logoWidth() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          return 150
        case 'sm':
          return 190
        case 'md':
          return 200
        case 'lg':
          return 220
        case 'xl':
          return 260
      }
    },
  },
})
</script>

<style scoped>
/* .navbar {
  min-height: 15vh;
  background-color: #f6e8ea;
} */

.nav-button {
  font-family: 'Nexa-Regular';
  color: #099094;
  font-weight: bold;
}
::v-deep .v-btn {
  color: #099094 !important;
  margin-top: 40px;
}
.nav-button:hover {
  background: #f5eaeb !important;
}
.nuxt-link {
  text-decoration: none;
  font-family: 'Nexa-Regular';
  color: #099094;
  text-transform: uppercase;
  font-size: 14px;
}
</style>

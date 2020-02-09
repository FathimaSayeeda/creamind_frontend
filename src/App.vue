<template>
  <div id="app">
    <navbar />
    <router-view />
    <myfooter />
  </div>
</template>

<script>
import navbar from "@/components/navbar.vue";
import myfooter from "@/components/footer.vue";
export default {
  components: {
    // js object
    navbar: navbar,
    myfooter: myfooter // here key="navbar", value = navbar, since both are same, people usually just write navbar
  }
};
</script>

<style lang="scss">
// Import Bulma's core
@import "~bulma/sass/utilities/_all";

// Set your colors
$primary: rgb(22, 153, 149);
$primary-invert: findColorInvert($primary);
$twitter: #4099ff;
$twitter-invert: findColorInvert($twitter);

// Setup $colors to use as bulma classes (e.g. 'is-twitter')
$colors: (
  "white": (
    $white,
    $black
  ),
  "black": (
    $black,
    $white
  ),
  "light": (
    $light,
    $light-invert
  ),
  "dark": (
    $dark,
    $dark-invert
  ),
  "primary": (
    $primary,
    $primary-invert
  ),
  "info": (
    $info,
    $info-invert
  ),
  "success": (
    $success,
    $success-invert
  ),
  "warning": (
    $warning,
    $warning-invert
  ),
  "danger": (
    $danger,
    $danger-invert
  ),
  "twitter": (
    $twitter,
    $twitter-invert
  )
);

// Links
$link: $primary;
$link-invert: $primary-invert;
$link-focus-border: $primary;

// Import Bulma and Buefy styles
@import "~bulma";
@import "~buefy/src/scss/buefy";

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: crimson;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: rgb(22, 153, 149);

    &.router-link-exact-active {
      color: rgb(22, 153, 149);
    }
  }
}
</style>

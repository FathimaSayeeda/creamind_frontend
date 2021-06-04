<template>
  <div id="contact" class="footer text-center py-8">
    <v-container fluid>
      <v-row class="foo" align="center" justify="center"
        ><v-col cols="12" md="3"
          ><img
            class="py-md-12"
            width="180px"
            :src="require('~/assets/creamind-logo.png')"
        /></v-col>

        <v-col class="information" cols="6" sm="3" md="2"
          ><v-row class="mb-4">INFORMATION</v-row>
          <v-row>About us</v-row>
          <v-row>Privacy Policy</v-row>
          <v-row>T & C</v-row>
        </v-col>
        <v-col cols="6" sm="3" md="2"
          ><v-row class="mb-4">CUSTOMER SERVICE</v-row>
          <v-row>Returns</v-row>
          <v-row>Specials</v-row>
          <v-row>Wishlist</v-row>
        </v-col>
        <v-col class="contact" cols="6" sm="3" md="2"
          ><v-row class="mb-4">CONTACT</v-row>
          <v-row>Phone</v-row>
          <v-row>Instagram</v-row>
          <v-row>Facebook</v-row></v-col
        >
        <v-col cols="6" sm="3" md="2"
          ><v-row class="mb-4">MY ACCOUNT</v-row>
          <v-row>Profile</v-row>
          <v-row>Orders</v-row>
          <v-row>Wishlist</v-row></v-col
        ></v-row
      >
      <v-row class="mt-8" justify="center"
        >© 2019 Kinda.All Rights Reserved.</v-row
      >
    </v-container>
  </div>
</template>

<style scoped lang="scss">
.footer {
  min-height: 35vh;
  background-color: black;
  font-size: 12px;
  letter-spacing: 1px;
  color: white;
  font-family: 'Nexa-Regular';
}
.information {
  @media (max-width: 960px) {
    padding-left: 50px;
  }
}
.contact {
  @media (max-width: 600px) {
    padding-left: 50px;
  }
}
</style>

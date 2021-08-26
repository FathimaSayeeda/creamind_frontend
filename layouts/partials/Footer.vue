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

        <v-col class="information" cols="12" sm="3" md="2"
          ><v-row justify="center" class="mb-4">INFORMATION</v-row>
          <v-row justify="center">About us</v-row>
          <v-row justify="center">Activities</v-row>
          <v-row justify="center">T & C</v-row>
        </v-col>

        <v-col cols="12" sm="3" md="2"
          ><v-row justify="center" class="mb-4 mt-6 mt-sm-0"
            >CUSTOMER SERVICE</v-row
          >
          <v-row justify="center">Delivery</v-row>
          <v-row justify="center">Returns</v-row>
          <v-row justify="center">Explore</v-row>
        </v-col>
        <v-col class="contact" cols="12" sm="3" md="2"
          ><v-row justify="center" class="mb-4 mt-6 mt-sm-0">CONTACT</v-row>
          <v-row justify="center">Phone</v-row>
          <v-row justify="center">Instagram</v-row>
          <v-row justify="center">Facebook</v-row></v-col
        >
      </v-row>
      <v-row class="mt-8" justify="center"
        >© 2021 The Crea Mind.All Rights Reserved.</v-row
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
</style>

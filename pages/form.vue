<template>
  <v-form class="mt-12">
    <v-row justify="center">
      <v-col cols="11" md="6">
        <div class="mb-10 heading">Registration Form</div>
        <v-text-field
          filled
          outlined
          color="#099094"
          class="text-field my-n2 rounded-lg"
          label="Full Name"
        ></v-text-field>

        <div>
          <v-menu
            ref="menu"
            v-model="menu1"
            color="#099094"
            class="text-field my-n2 rounded-lg"
            :close-on-content-click="false"
            transition="scale-transition"
            offset-y
            min-width="auto"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                filled
                outlined
                color="#099094"
                v-model="date"
                label="Date of Birth"
                prepend-inner-icon="mdi-calendar"
                readonly
                v-bind="attrs"
                v-on="on"
                class="text-field my-n2 rounded-lg"
              ></v-text-field>
            </template>
            <v-date-picker
              color="#099094"
              v-model="date"
              :active-picker.sync="activePicker"
              :max="
                new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
                  .toISOString()
                  .substr(0, 10)
              "
              min="1950-01-01"
              @change="save"
            ></v-date-picker>
          </v-menu>
        </div>
        <v-text-field
          filled
          outlined
          color="#099094"
          class="text-field my-n2 rounded-lg"
          label="Age"
        ></v-text-field>

        <v-radio-group v-model="row" row class="mt-n3">
          <v-radio color="#099094" label="Female" value="Female"></v-radio>
          <v-radio color="#099094" label="Male" value="Male"></v-radio>
        </v-radio-group>

        <v-text-field
          filled
          outlined
          color="#099094"
          class="text-field my-n2 rounded-lg"
          label="Class"
        ></v-text-field>
        <v-textarea
          v-model="contactMessage"
          filled
          outlined
          color="#099094"
          class="text-field my-n2 rounded-lg"
          label="Permanent Address"
        ></v-textarea>
        <v-textarea
          v-model="contactMessage"
          filled
          outlined
          color="#099094"
          class="text-field my-n2 rounded-lg"
          label="Delivery Address"
        ></v-textarea>
        <div>
          <v-checkbox
            color="#099094"
            v-model="checkbox"
            label="Same as Permanent Address"
          ></v-checkbox>
        </div>

        <v-text-field
          filled
          outlined
          color="#099094"
          class="text-field my-n2 rounded-lg"
          label="School Name"
        ></v-text-field>
        <v-text-field
          filled
          outlined
          color="#099094"
          class="text-field my-n2 rounded-lg"
          label="Hobbies"
        ></v-text-field>

        <v-row no-gutters justify="space-between">
          <v-col cols="12" sm="5">
            <div class="mb-3">Mother's Details</div>
            <v-text-field
              filled
              outlined
              color="#099094"
              class="text-field my-n2 rounded-lg"
              label="Full Name"
            ></v-text-field>
            <v-text-field
              filled
              outlined
              color="#099094"
              class="text-field my-n2 rounded-lg"
              label="Occupation"
            ></v-text-field>
            <v-text-field
              filled
              outlined
              color="#099094"
              class="text-field my-n2 rounded-lg"
              label="Mobile Number"
            ></v-text-field>
            <v-text-field
              filled
              outlined
              color="#099094"
              class="text-field my-n2 rounded-lg"
              label="Email Address"
            ></v-text-field
          ></v-col>
          <v-col cols="12" sm="5">
            <div class="mb-3">Father's Details</div>
            <v-text-field
              filled
              outlined
              color="#099094"
              class="text-field my-n2 rounded-lg"
              label="Full Name"
            ></v-text-field>
            <v-text-field
              filled
              outlined
              color="#099094"
              class="text-field my-n2 rounded-lg"
              label="Occupation"
            ></v-text-field>
            <v-text-field
              filled
              outlined
              color="#099094"
              class="text-field my-n2 rounded-lg"
              label="Mobile Number"
            ></v-text-field>
            <v-text-field
              filled
              outlined
              color="#099094"
              class="text-field my-n2 rounded-lg"
              label="Email Address"
            ></v-text-field
          ></v-col>
        </v-row>
        <v-text-field
          filled
          outlined
          color="#099094"
          class="text-field my-n2 rounded-lg"
          label="No. of books to be taken at a time"
        ></v-text-field>
        <div>
          <v-menu
            ref="menu"
            v-model="menu2"
            color="#099094"
            class="text-field my-n2 rounded-lg"
            :close-on-content-click="false"
            transition="scale-transition"
            offset-y
            min-width="auto"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                color="#099094"
                filled
                outlined
                v-model="date"
                label="Admission Date"
                prepend-inner-icon="mdi-calendar"
                readonly
                v-bind="attrs"
                v-on="on"
                class="text-field my-n2 rounded-lg"
              ></v-text-field>
            </template>
            <v-date-picker
              color="#099094"
              v-model="date"
              :active-picker.sync="activePicker"
              :max="
                new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
                  .toISOString()
                  .substr(0, 10)
              "
              min="1950-01-01"
              @change="save"
            ></v-date-picker>
          </v-menu>
        </div>
      </v-col>
    </v-row>
    <v-row no-gutters justify="center">
      <v-btn
        depressed
        x-large
        outlined
        class="col-11 col-md-6 register-button mb-16 text-capitalize"
      >
        REGISTER
      </v-btn>
    </v-row>
  </v-form>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data: () => ({
    date: null,
    row: null,
    menu1: false,
    menu2: false,
    checkbox: true,
  }),

  methods: {
    save(date) {
      this.$refs.menu.save(date)
    },
  },
})
</script>

<style scoped>
.heading {
  text-align: center;
  font-size: 32px;
  font-weight: bold;
}
.v-input--checkbox {
  margin-top: -20px;
}
::v-deep.register-button {
  color: crimson !important;
  background-color: white !important;
}
::v-deep.register-button:hover {
  color: white !important;
  background-color: crimson !important;
}
</style>

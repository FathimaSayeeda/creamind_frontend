<template>
  <v-form
    class="mt-12"
    lazy-validation
    ref="form"
    v-model="registration_form_valid"
  >
    <v-row justify="center">
      <v-col cols="11" md="6">
        <div class="mb-10 heading">Registration Form</div>
        <!-- First & Last Name -->
        <v-row no-gutters justify="space-between">
          <v-col cols="12" sm="6" class="pr-1">
            <v-text-field
              filled
              outlined
              required
              color="#099094"
              class="text-field my-n2 rounded-lg"
              label="First Name"
              v-model="registration_doc.first_name"
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="6">
            <v-text-field
              filled
              outlined
              color="#099094"
              class="text-field my-n2 rounded-lg"
              label="Last Name"
              v-model="registration_doc.last_name"
            ></v-text-field>
          </v-col>
        </v-row>

        <!-- DOB -->
        <v-dialog
          ref="dob_dialog"
          v-model="modal.date_of_birth"
          :return-value.sync="registration_doc.date_of_birth"
          persistent
          width="290px"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
              v-model="registration_doc.date_of_birth"
              label="Date of Birth"
              prepend-icon="mdi-calendar"
              readonly
              required
              v-bind="attrs"
              v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker v-model="registration_doc.date_of_birth" scrollable>
            <v-spacer></v-spacer>
            <v-btn text color="primary" @click="modal.date_of_birth = false">
              Cancel
            </v-btn>
            <v-btn
              text
              color="primary"
              @click="$refs.dob_dialog.save(registration_doc.date_of_birth)"
            >
              OK
            </v-btn>
          </v-date-picker>
        </v-dialog>

        <!-- Gender -->
        <v-radio-group
          required
          v-model="registration_doc.gender"
          row
          class="mt-n3"
        >
          <v-radio color="#099094" label="Male" value="Male"></v-radio>
          <v-radio color="#099094" label="Female" value="Female"></v-radio>
        </v-radio-group>

        <!-- School & Class -->
        <v-text-field
          filled
          outlined
          color="#099094"
          class="text-field my-n2 rounded-lg"
          label="Class"
          v-model="registration_doc.class"
        ></v-text-field>
        <v-text-field
          filled
          outlined
          color="#099094"
          class="text-field my-n2 rounded-lg"
          label="School Name"
          v-model="registration_doc.school_name"
        ></v-text-field>

        <!-- Hobbies -->
        <v-text-field
          v-model="registration_doc.hobbies"
          filled
          outlined
          color="#099094"
          class="text-field my-n2 rounded-lg"
          label="Hobbies"
        ></v-text-field>

        <!-- Address -->
        <v-textarea
          v-model="registration_doc.permanent_address"
          filled
          outlined
          required
          color="#099094"
          class="text-field my-n2 rounded-lg"
          label="Permanent Address"
        ></v-textarea>
        <v-checkbox
          color="#099094"
          v-model="registration_doc.delivery_address_same_as_permanent_address"
          label="Delivery Address same as Permanent Address"
        ></v-checkbox>
        <v-textarea
          v-if="!registration_doc.delivery_address_same_as_permanent_address"
          v-model="registration_doc.delivery_address"
          filled
          outlined
          color="#099094"
          class="text-field my-n2 rounded-lg"
          label="Delivery Address"
        ></v-textarea>

        <!-- Parents -->
        <v-row no-gutters justify="space-between">
          <!-- Maternal Details -->
          <v-col cols="12" sm="6" class="pr-1">
            <div class="mb-3">Mother's Details</div>
            <v-text-field
              v-model="registration_doc.mother_full_name"
              filled
              required
              outlined
              color="#099094"
              class="text-field my-n2 rounded-lg"
              label="Full Name"
            ></v-text-field>
            <v-text-field
              v-model="registration_doc.mother_occupation"
              filled
              outlined
              color="#099094"
              class="text-field my-n2 rounded-lg"
              label="Occupation"
            ></v-text-field>
            <v-text-field
              v-model="registration_doc.mother_mobile_no"
              filled
              outlined
              required
              color="#099094"
              class="text-field my-n2 rounded-lg"
              label="Mobile Number"
            ></v-text-field>
            <v-text-field
              v-model="registration_doc.mother_email_id"
              filled
              outlined
              color="#099094"
              class="text-field my-n2 rounded-lg"
              label="Email Address"
            ></v-text-field
          ></v-col>

          <!-- Paternal Details -->
          <v-col cols="12" sm="6">
            <div class="mb-3">Father's Details</div>
            <v-text-field
              v-model="registration_doc.father_full_name"
              filled
              outlined
              required
              color="#099094"
              class="text-field my-n2 rounded-lg"
              label="Full Name"
            ></v-text-field>
            <v-text-field
              v-model="registration_doc.father_occupation"
              filled
              outlined
              color="#099094"
              class="text-field my-n2 rounded-lg"
              label="Occupation"
            ></v-text-field>
            <v-text-field
              v-model="registration_doc.father_mobile_no"
              filled
              outlined
              required
              color="#099094"
              class="text-field my-n2 rounded-lg"
              label="Mobile Number"
            ></v-text-field>
            <v-text-field
              v-model="registration_doc.father_email_id"
              filled
              outlined
              color="#099094"
              class="text-field my-n2 rounded-lg"
              label="Email Address"
            ></v-text-field
          ></v-col>
        </v-row>

        <!-- Num Books -->
        <v-text-field
          v-model="registration_doc.no_of_books_at_a_time"
          :rules="[rules.integer]"
          type="number"
          filled
          required
          outlined
          color="#099094"
          class="text-field my-n2 rounded-lg"
          label="No. of books to be taken at a time"
        ></v-text-field>
      </v-col>
    </v-row>

    <v-row no-gutters justify="center">
      <v-btn
        depressed
        x-large
        outlined
        @click="make_request()"
        class="col-11 col-md-6 register-button mb-16 text-capitalize"
      >
        REGISTER
      </v-btn>
    </v-row>

    <!-- Loading Dialog -->
    <v-overlay :value="loading.submit_registration">
      <v-progress-circular indeterminate size="64"></v-progress-circular>
    </v-overlay>

    <!-- Registration Success -->
    <v-dialog width="50%" v-model="modal.registration_successful" persistent>
      <v-container
        style="background-color: #fff"
        class="d-flex align-center flex-column py-6"
      >
        <img
          class="dialog-img"
          :src="require('~/assets/registration-success.png')"
        />
        <h2 class="pa-2">Registration Successful!</h2>
        <nuxt-link :to="{ path: '/' }" class="nuxt-link"
          ><v-btn class="text-capitalize" text>GO HOME</v-btn></nuxt-link
        >
      </v-container>
    </v-dialog>

    <!-- Registration Failure -->
    <v-dialog width="50%" v-model="modal.registration_failed">
      <v-container
        style="background-color: #fff"
        class="d-flex align-center flex-column py-6"
      >
        <img
          class="dialog-img"
          :src="require('~/assets/registration-failure.png')"
        />
        <h2 class="pa-2">Registration Failed :(</h2>
      </v-container>
    </v-dialog>
  </v-form>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapActions } from 'vuex'

export default Vue.extend({
  data: () => ({
    registration_form_valid: true,
    registration_doc: {
      first_name: '',
      last_name: '',
      gender: 'Male',
      date_of_birth: new Date().toISOString().substr(0, 10),
      class: '',
      school_name: '',
      hobbies: '',
      permanent_address: '',
      delivery_address_same_as_permanent_address: true,
      delivery_address: '',
      no_of_books_at_a_time: 2,
      // Maternal
      mother_full_name: '',
      mother_occupation: '',
      mother_mobile_no: '',
      mother_email_id: '',
      // Paternal
      father_full_name: '',
      father_occupation: '',
      father_mobile_no: '',
      father_email_id: '',
    },
    modal: {
      date_of_birth: false,
      registration_successful: false,
      registration_failed: false,
    },
    loading: {
      submit_registration: false,
    },
    rules: {
      integer: (value: any) => {
        try {
          if (typeof value === 'string' && value.indexOf('.') >= 0) {
            return 'Should be an Integer'
          }
          value = parseInt(value)
          if (value % 1 === 0) {
            return true
          }
          return 'Should be an Integer'
        } catch (e) {
          return 'Should be a number'
        }
      },
    },
  }),

  methods: {
    ...mapActions(['registration/makeRegistrationRequest']),
    async make_request() {
      this.loading.submit_registration = true
      // @ts-ignore
      const d = await this['registration/makeRegistrationRequest'](
        this.registration_doc
      )
      await new Promise((res) => setTimeout(res, 1000)).catch((e) => ({
        errors: [e],
      }))
      this.loading.submit_registration = false
      if (d.errors && d.errors.length) {
        this.modal.registration_failed = true;
      } else {
        // Success
        this.modal.registration_successful = true;
      }
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

.dialog-img {
  width: 7em;
}
</style>

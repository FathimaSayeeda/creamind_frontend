<template>
  <div class="login">
    <h3><strong class="auth">Authentication</strong></h3>
    <br />
    <b-field>
      <b-input
        v-model="email"
        :readonly="isLoading"
        placeholder="email"
      ></b-input>
    </b-field>
    <b-field>
      <b-input
        v-model="password"
        type="password"
        :readonly="isLoading"
        placeholder="password"
      ></b-input>
    </b-field>
    <div v-on:click="login" class="buttons is-centered">
      <a class="button">
        <strong>Login</strong>
      </a>
    </div>
  </div>
</template>

<script>
import { getBaseUrl } from "../utils";

export default {
  data: function() {
    return {
      email: "",
      password: "",
      isLoading: false
    };
  },
  methods: {
    login: async function() {
      this.isLoading = true;
      await fetch(`${getBaseUrl()}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email: this.email,
          password: this.password
        })
      });
      this.isLoading = false;
    }
  }
};
</script>

<style>
.login {
  margin-left: 500px;
  margin-right: 500px;
  margin-top: 50px;
}
.auth {
  color: rgb(22, 153, 149);
}
</style>

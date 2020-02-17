<template>
  <div class="auth">
    <div class = "login">
    <Login />
    </div>
    <LogoutButton />
  </div>
</template>

<script>
/* eslint-disable no-unused-vars */
import "@/assets/style/css/authStyle.css";
import axios from "axios";

import LogoutButton from "@/components/common/LogoutButton.vue";

import Login from "@/components/Form/Login.vue";

export default {
  name: "Authentication",
  components: {
    LogoutButton,
    Login
  }
};
</script>

<style scoped>
.error {
  background-color: lightyellow !important;
  border-color: lightyellow !important;
}
.v-application .error {
  background-color: lightyellow !important;
  border-color: lightyellow !important;
}
</style>
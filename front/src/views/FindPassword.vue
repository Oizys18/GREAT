<template>
  <div class="auth">
    <div class="join">
      <h2>Find Password</h2>
      <div class="join-container">
        <div style="margin-top: 15px;"></div>
        <div class="input-with-label email-input">
          <input v-model="email" id="email" placeholder="이메일을 입력하세요." type="text" />
          <label for="email">이메일</label>
        </div>
        <div class="join-button-container">
          <v-btn
            style="margin-top: 1px; float: right;"
            rounded
            color="#ff7761"
            dark
            @click="sendPW()"
          >전송</v-btn>
        </div>
      </div>
      <v-btn
        style="margin: 0 auto; margin-top: 10px; width: 40%;"
        color="rgb(251, 251, 255)"
        @click="redirectLogin()"
      >로그인 화면으로</v-btn>
    </div>
  </div>
</template>

<script>
/* eslint-disable no-unused-vars */
import "@/assets/style/css/authStyle.css";
import axios from "axios";
import UserApi from "@/apis/UserApi";

export default {
  created() {
    this.email = "";
    this.sns_token = sessionStorage.getItem("sns_token");
  },
  methods: {
    sendPW() {
      let email = this.email;
      axios.get("http://13.124.1.176/searchpassword/" + email).then((res) => {
        console.log('메일 전송 성공');
        alert('메일이 전송되었습니다.');
        this.$router.push("Authentication");
      });
    },
    redirectLogin() {
      this.$router.push("Authentication");
    }
  },
  data() {
    return {
      email: "",
      component: this
    };
  }
};
</script>
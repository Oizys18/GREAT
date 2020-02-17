<template>
  <div class="auth">
    <div class="join">
      <div class="join-container">
        <h2>비밀번호 찾기</h2>
        <div class="input-with-label email-input">
          <input v-model="email" id="email" placeholder="이메일을 입력하세요." type="text" />
          <label for="email">이메일</label>
          <v-btn style="margin-top: 5px" rounded color="#ff7761" dark @click="sendPW()">전송</v-btn>
        </div>
      </div>
      <v-btn style="margin: 0 auto; margin-top: 10px; width: 50%;" color="#ff7761" dark @click="redirectLogin()">로그인 화면으로</v-btn>
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
    sendPW(){
      let email = this.email;
      
    },
    redirectLogin(){
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
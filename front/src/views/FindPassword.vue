<template>
  <div class="auth">
    <div class="join">
      <div class="join-container">
        <h2>비밀번호 찾기</h2>
        <div class="input-with-label email-input">
          <input v-model="email" id="email" placeholder="이메일을 입력하세요." type="text" />
          <label for="email">이메일</label>
          <button
            class="v-btn v-btn--contained v-btn--rounded theme--dark"
            id="email-check"
            @click="emailCheck()"
            >전송</button>
        </div>
        <v-btn rounded color="#ff7761" dark @click="socialjoinApi()">로그인하기</v-btn>
      </div>
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
    this.sns_token = sessionStorage.getItem("sns_token");
  },
  methods: {
  },
  data() {
    return {
      
      component: this
    };
  }
};
</script>
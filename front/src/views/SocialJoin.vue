<template>
  <div class="auth">
    <div class="join">
      <h1>Social Join</h1>
      <div class="join-container">
        <div class="input-with-label">
          <input v-model="nickname" id="nickname" placeholder="닉네임을 입력하세요." type="text" />
          <label for="nickname">닉네임</label>
        </div>

        <div class="input-with-label">
          <label for="birth">생년월일</label>
          <input
            v-model="birth"
            id="birth"
            placeholder="생년월일을 입력하세요."
            type="date"
            data-date-picker="activated"
          />
        </div>
        <div class="join-radio-container">
          <div class="input-with-label">
            <label for="gender">성별</label>
          </div>
          <div class="radio-btn-group">
            <div class="radio">
              <input type="radio" name="radio" value="M" checked="checked" v-model="gender" id="M" />
              <label for="M">남성</label>
            </div>
            <div class="radio">
              <input type="radio" name="radio" value="F" v-model="gender" id="F" />
              <label for="F">여성</label>
            </div>
          </div>
        </div>
        <div class="join-button-container">
          <v-btn rounded color="#ff7761" dark @click="joinRedirect()">취소</v-btn>
          <v-btn rounded color="#ff7761" dark @click="socialjoinApi()">가입</v-btn>
        </div>
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
    socialjoinApi() {
      let { isSubmit, nickname, birth, gender, sns_token } = this;
      UserApi.requestSocialRegister(nickname, sns_token, birth, gender, res => {
        console.log(res);
      }).then(
        sessionStorage.setItem('sns_token',null),
        sessionStorage.setItem('social_data',null),
        sessionStorage.setItem('email',null),
        sessionStorage.setItem('token',null)
      );
      this.joinRedirect();
    },
    afterJoin(){
      this.$router.push("Authentication");
      // this.$router.go(0);
    },
    joinRedirect() {
      sessionStorage.setItem('social_data',null);
      this.$router.push("Authentication");
      // this.$router.go(0);
    }
  },
  data() {
    return {
      sns_token: "",
      nickname: "",
      birth: "",
      gender: "",
      isSubmit: false,
      component: this
    };
  }
};
</script>
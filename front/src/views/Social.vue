<template>
  <div>
    <div>
      <!-- <button @click="hello">Gokakao</button> -->
      <img
        @click="kakaoLogin"
        id="kakao-login-btn"
        src="https://kauth.kakao.com/public/widget/login/kr/kr_02_medium.png"
        style="cursor: pointer"
        onmouseover="this.src='https://kauth.kakao.com/public/widget/login/kr/kr_02_medium_press.png'"
        onmouseout="this.src='https://kauth.kakao.com/public/widget/login/kr/kr_02_medium.png'"
      />
    </div>
    <div>
      <button @click="handleClickGetAuth">get auth code</button>
    </div>
  </div>
</template>



<script>
import KakaoAuth from "@/apis/KakaoApi.js";
import axios from 'axios'
export default {
  name: "App",
  methods: {
    kakaoLogin() {
      KakaoAuth.loginWithKakao();

    },
    handleClickGetAuth() {
        this.$gAuth
        .signIn()
        .then(GoogleUser => {
            //on success do something
          console.log("GoogleUser", GoogleUser["Ca"]);
            axios.post("http://localhost:8080/user/socialLogin",GoogleUser["Ca"])
                .then(response=>{
                    console.log(response.data);
                })
        })
        .catch(error => {
          //on fail do something
          console.log(error);
        });
    }
  }
};
</script>
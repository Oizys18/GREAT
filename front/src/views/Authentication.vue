<template>
  <div class="auth">
    <div class="join" v-if="join==true">
      <h1>Join</h1>
      <div class="join-container">
        <div class="input-with-label email-input">
          <input
            v-model="email"
            v-bind:class="{error : error.email, complete:!error.email&&email.length!==0}"
            id="email"
            placeholder="이메일을 입력하세요."
            type="text"
          />
          <label for="email">이메일</label>
          
          <button v-if="emailCheckReturn==false"
            class="v-btn v-btn--contained v-btn--rounded theme--dark"
            id="email-check"
            @click="emailCheck()"
          >중복 확인</button>
          <button v-else
            class="v-btn v-btn--contained v-btn--rounded theme--dark"
            id="email-check"
            @click="emailAuth()">이메일 인증</button>
          <div class="error-text" v-if="error.email">{{error.email}}</div>
        </div>
        
        <div v-if="emailAuthReturn==true">
          <input type="text" placeholder="메일로 전송된 인증번호를 입력하세요">
          <button>확인</button>
        </div>
        <div v-else></div>
          <!-- <div class="input-with-label">
            <input
              v-model="password"
              v-bind:class="{error : error.password, complete:!error.password&&password.length!==0}"
              id="password"
              type="password"
              placeholder="비밀번호를 입력하세요."
            />
            <label for="password">비밀번호</label>
            <div class="error-text" v-if="error.password">{{error.password}}</div>
          </div>

          <div class="input-with-label">
            <input
              v-model="passwordConfirm"
              type="password"
              id="password-confirm"
              placeholder="비밀번호를 다시한번 입력하세요."
            />
            <label for="password-confirm">비밀번호 확인</label>
            <div class="error-text" v-if="error.passwordConfirm">{{error.passwordConfirm}}</div>
          </div>

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
           <v-date-picker v-model="picker" color="green lighten-1"></v-date-picker> -->
            <!-- <div class="join-radio-container">
            <div class="input-with-label">
              <label for="gender">성별</label>
            </div>
            <div class="radio-btn-group">
              <div class="radio">
                <input
                  type="radio"
                  name="radio"
                  value="male"
                  checked="checked"
                  v-model="gender"
                  id="male"
                />
                <label for="male">남성</label>
              </div>
              <div class="radio">
                <input type="radio" name="radio" value="female" v-model="gender" id="female" />
                <label for="female">여성</label>
              </div>
            </div>
          </div>
          <div class="join-button-container">
          <v-btn rounded color="#FC913A" dark @click="joinRedirect()">취소</v-btn>
          <v-btn rounded color="#FC913A" dark @click="joinApi()">가입</v-btn>
        </div>
        </div>
        </div> -->
      </div>

          

          
    </div>
    <div class="login" v-else>
      <div class="login-subcontainer">
        <h1>Login</h1>
        <div class="login-container">
          <div class="login-box">
            <div class="input-with-label">
              <label for="loginID">ID</label>
              <input v-model="loginID" id="loginID" @keyup.enter="loginApi" type="text" />
            </div>
            <br />
            <div class="input-with-label">
              <label for="loginPW">PW</label>
              <input v-model="loginPW" type="password" @keyup.enter="loginApi" id="loginPW" />
            </div>
          </div>
          <v-btn rounded color="#FC913A" dark @click="loginApi">확 인</v-btn>
        </div>
        <div class="sns-login">
          <h3>SNS 로그인</h3>
          <SocialLogin />
        </div>
        <div class="add-option">
          <div class="wrap">
            <p>비밀번호를 잊으셨나요?</p>
            <button class="btn--text">비밀번호 찾기</button>
          </div>
          <div class="wrap">
            <p>아직 회원이 아니신가요?</p>
            <button @click="joinRequest" class="btn--text">회원가입</button>
          </div>
        </div>
      </div>

      <p></p>
    </div>
  </div>
</template>

<script>
/* eslint-disable no-unused-vars */
import "@/assets/style/css/authStyle.css";
// import axios from 'axios'
import SocialLogin from "@/components/common/SocialLogin.vue";
import UserApi from "@/apis/UserApi";
import PV from "password-validator";
import * as EmailValidator from "email-validator";

export default {
  name: "Authentication",
  components: {
    SocialLogin
  },
  created() {
    this.component = this;

    this.passwordSchema
      .is()
      .min(8)
      .is()
      .max(100)
      .has()
      .digits()
      .has()
      .letters();
  },
  watch: {
    password: function(v) {
      this.checkForm();
    },
    email: function(v) {
      this.checkForm();
    },
    passwordConfirm: function(v) {
      this.checkForm();
    }
  },
  methods: {
    checkForm() {
      if (this.email.length > 0 && !EmailValidator.validate(this.email))
        this.error.email = "이메일 형식이 아닙니다.";
      else this.error.email = false;

      if (
        this.password.length > 0 &&
        !this.passwordSchema.validate(this.password)
      )
        this.error.password = "영문,숫자 포함 8 자리이상이어야 합니다.";
      else this.error.password = false;

      if (
        this.passwordConfirm.length > 0 &&
        this.passwordConfirm != this.password &&
        this.error.password == false
      )
        this.error.passwordConfirm = "입력한 비밀번호와 일치해야 합니다.";
      else this.error.passwordConfirm = false;
      let isSubmit = true;
      Object.values(this.error).map(v => {
        if (v) isSubmit = false;
      });
      this.isSubmit = isSubmit;
    },
    emailCheck() {
      let { email } = this;
      UserApi.emailCheck(email, res => {
        console.log(res);
      });
      this.emailCheckReturn = true;
    },
    emailAuth(){
      let { email } = this;
      UserApi.emailAuth(email, res => {
        console.log(res);
      });
      this.emailAuthReturn = true;
    },
    loginApi() {
      let { loginID, loginPW } = this;
      UserApi.requestLogin(loginID, loginPW, res => {
        console.log(res);
      });
    },
    joinApi() {
      let { email, password, nickname, birth, gender } = this;
      UserApi.requestRegister(email, nickname, password, birth, gender, res => {
        console.log(res);
      });
    },
    joinRequest() {
      this.join = true;
    },
    joinRedirect() {
      this.email = "";
      this.password = "";
      this.passwordConfirm = "";
      this.nickname = "";
      this.birth = "";
      this.gender = "";
      this.join = false;
      this.error.email = false;
      this.error.password = false;
      this.error.passwordConfirm = false;
      this.emailCheckReturn = false;
      this.emailAuthReturn = false;
    }
  },
  data() {
    return {
      emailCheckReturn: false,
      emailAuthReturn: false,
      email: "",
      password: "",
      passwordConfirm: "",
      nickname: "",
      birth: "",
      loginID: "",
      loginPW: "",
      gender: "",
      join: false,
      passwordSchema: new PV(),
      error: {
        email: false,
        password: false,
        passwordConfirm: false
      },
      isSubmit: false,
      component: this
    };
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
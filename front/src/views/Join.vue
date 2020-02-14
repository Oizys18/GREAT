<template>
<div class="auth">
  <div class="join">
    <div class="join-container">
      <h1>Join</h1>
      <div class="input-with-label email-input">
        <input
          v-model="email"
          v-bind:class="{error : error.email, complete:!error.email&&email.length!==0}"
          id="email"
          placeholder="이메일을 입력하세요."
          type="text"
        />
        <label for="email">이메일</label>

        <button
          v-if="emailCheckReturn==false"
          class="v-btn v-btn--contained v-btn--rounded theme--dark"
          id="email-check"
          @click="emailCheck()"
        >중복 확인</button>
        <button
          v-else
          class="v-btn v-btn--contained v-btn--rounded theme--dark"
          id="email-check"
          @click="emailAuth()"
        >이메일 인증</button>
        <div class="error-text" v-if="error.email">{{error.email}}</div>
      </div>

      <div id="emailAuthInput" v-if="emailAuthReturn==true">
        <input v-model="emailAuthInput" type="text" placeholder="메일로 전송된 인증번호를 입력하세요" />
        <div></div>
        <button @click="emailSubmit()">확인</button>
      </div>
      <div v-else></div>
      <div class="input-with-label">
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
      </div>
      <!-- <v-date-picker v-model="picker" color="green lighten-1"></v-date-picker>-->
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
        <v-btn rounded color="#ff7761" dark @click="joinApi()">가입</v-btn>
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
import PV from "password-validator";
import * as EmailValidator from "email-validator";

export default {
  name: "Join",
  created() {
    this.isSubmit = false;
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

    },
    emailCheck() {
      let { email } = this;
      axios.get("http://13.124.1.176:8080/user/email/" + email).then(res => {
        console.log(res);
        if (res.data.data.length < 3) {
          this.emailCheckReturn = true;
        } else {
          alert("이메일 중복");
        }
      });
    },
    emailAuth() {
      let { email } = this;
      UserApi.emailAuth(email, res => {
        console.log(res);
      });
      this.emailAuthReturn = true;
    },
    emailSubmit() {
      let { emailAuthInput } = this;
      if (sessionStorage.getItem("emailAuth") == emailAuthInput) {
        alert("이메일 인증 성공");
        this.isSubmit = true;
      } else {
        alert("이메일 인증 실패");
        this.isSubmit = false;
      }
    },

    joinApi() {
      let isSubmit1 = true;
      Object.values(this.error).map(v => {
        if (v) isSubmit1 = false;
      });
      if(!isSubmit1)this.isSubmit = isSubmit1;
      let { isSubmit, email, password, nickname, birth, gender } = this;
      if (isSubmit) {
        UserApi.requestRegister(
          email,
          nickname,
          password,
          birth,
          gender,
          res => {
            console.log(res);
          }
        );
        this.joinRedirect();
      } else {
        alert("이메일 인증을 해주세요");
      }
    },

    joinRedirect() {
      this.$router.push('Authentication');
    }
  },
  data() {
    return {
      emailCheckReturn: false,
      emailAuthReturn: false,
      emailAuthInput: "",
      email: "",
      password: "",
      passwordConfirm: "",
      nickname: "",
      birth: "",
      gender: "",
      sns_token: "",
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
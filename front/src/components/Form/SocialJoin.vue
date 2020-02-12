<template>
  <div class="join-container">
		<h1>Social Join</h1>
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
      <v-btn rounded color="#FC913A" dark @click="joinRedirect()">취소</v-btn>
      <v-btn :aria-disabled="!isSubmit" rounded color="#FC913A" dark @click="joinApi()">가입</v-btn>
    </div>
  </div>
</template>

<script>
/* eslint-disable no-unused-vars */
import "@/assets/style/css/authStyle.css";
import axios from "axios";
import UserApi from "@/apis/UserApi";

export default {};
</script>
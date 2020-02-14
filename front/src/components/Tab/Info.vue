<template>
  <div>
    <!-- 이름 -->
    <div v-if="isInfo" class="user-details" id="name">
      <div class="user-details-with-label">
        <label for="name">이름 </label>
        {{user.name }}

        <v-btn class="edit-btn" text color="black" v-on:click="change">
          Edit<v-icon right>mdi-pencil</v-icon>
        </v-btn>
      </div>
    </div>

    <div v-else class="user-details">
      <div class="edit-with-label">
        <label for="name_modify">이름</label>
        <input
          v-model="user.name"
          id="name_modify"
          name="name_modify"
          type="text"
        />
      </div>
    </div>

    <!-- 이메일 -->
    <div v-if="isInfo" class="user-details" id="email">
      <div class="user-details-with-label">
        <label for="email">이메일</label>
        {{ user.email }}
      </div>
      <!-- <p>이메일: {{ email }}</p> -->
    </div>
    <div v-else class="user-details">
      <div class="edit-with-label">
        <label for="email_modify">이메일</label>
        <input
          v-model="user.email"
          id="email_modify"
          name="email_modify"
          type="text"
        />
      </div>
    </div>

    <!-- 생년월일 -->
    <div v-if="isInfo" class="user-details" id="birth">
      <div class="user-details-with-label">
        <label for="birth">생년월일</label>
        {{ user.birth }}
      </div>
      <!-- <p>생년월일: {{ birth }}</p> -->
    </div>
    <div v-else class="user-details">
      <div class="edit-with-label">
        <label for="birth_modify">생년월일</label>
        <input
          v-model="user.birth"
          id="birth_modify"
          name="birth_modify"
          type="date"
          data-date-picker="activated"
        />
      </div>
    </div>

    <!-- 성별 -->
    <div v-if="isInfo" class="user-details" id="gender">
      <div class="user-details-with-label">
        <label for="userGender">성별</label>
        <!-- <div v-if="gender_">Male</div>
            <div v-else>Female</div> -->
        {{ userGender }}
      </div>
      <!-- <p>성별 : {{ gender }}</p> -->
    </div>

    <div v-else class="">
      <div class="edit-with-label">
        <label for="gender">성별</label>
      </div>
      <div class="mypage-radio-btn-group">
        <div class="mypage-radio">
          <input
            type="radio"
            value="Male"
            v-model="user.gender"
            id="male_modify"
            name="male_modify"
          />
          <label for="male_modify">Male</label>
        </div>

        <div class="mypage-radio">
          <input
            type="radio"
            value="Female"
            v-model="user.gender"
            id="female_modify"
            name="female_modify"
          />
          <label for="female_modify">Female</label>
        </div>
      </div>
      <!-- <div class="mypage-radio-btn-group">
          <label for="gender">성별</label>
          <div class="mypage-radio">
            <input type="radio" value="Male" v-model="gender"  id="male_modify" name="male_modify"/>
            <label for="male_modify">Male</label>
          </div>
        
          <div class="mypage-radio">
            <input type="radio" value="Female" v-model="gender" id="female_modify" name="female_modify"/>
            <label for="female_modify">Female</label>
          </div>

        </div> -->
    </div>

    <div v-if="!isInfo" class="edit-box">
      <button v-on:click="cancle" class="modify-button">취소</button>
      <button v-on:click="ok" class="modify-button">수정</button>
    </div>
  </div>
</template>

<script>
import MypageApi from "@/apis/MypageApi.js";
export default {
  name: "Info",
  data() {
    return {
      myreviews: [],
      isInfo: true,
    };
  },
  created: function() {},
  mounted: function() {
    //로그인한 사용자 회원 정보 요청
      
    if (this.user.gender == "M") this.user.gender = "Male";
    else this.user.gender = "Female";
  },
  computed: {
    user(){
      return this.$store.state.userInfo
    },
    userGender(){
      var gen = this.user.gender
      if (gen == "M") gen = "Male";
      else gen = "Female";
      return gen
    }
  },
  methods: {
    gender_() {
      console.log("사용자 성별:" + this.user.gender);
      if (this.user.gender == "M") {
        console.log("남성");
        return true;
      } else if (this.user.gender == "F") {
        console.log("여성");
        return false;
      }
    },
    change() {
      //수정하기 버튼 클릭
      this.isInfo = false;
      if(this.userGender=='Male') this.user.gender="Male"
      else this.user.gender="Female"
    },
    cancle() {
      //수정하기 - 취소 버튼 클릭
      this.isInfo = true;
    },
    ok() {
      //수정하기 - 확인 버튼 클릭
      if (this.user.gender == "Male") this.user.gender = "M";
      else this.user.gender = "F";

      MypageApi.modifyUserInfo(this.user,response=>{
        this.$store.commit('userInfo',response)
      });
      
      this.isInfo = true;
    
    }
  }
};
</script>

<style></style>

<template>
  <div class="">
    <!-- 이름 -->
    <div v-if="isInfo" class="user-details" id="name">
      <div class="user-details-with-label">
          <label for="name">이름 </label>  
          {{name}}

          <v-btn class="edit-btn"
          text color="black"
          v-on:click="change"
          >
          Edit<v-icon right>mdi-pencil</v-icon> 
          </v-btn>
      </div>

      <!-- 이름:{{ name }}
        <span  style="float:right">

          <v-btn class="edit-btn"
          text color="black"
          v-on:click="change"
          >
          Edit<v-icon right>mdi-pencil</v-icon> 
          </v-btn>

        </span> -->
        <!-- <button class="btn-modify" v-on:click="change">내 정보 수정</button> -->
    </div>
    
    <div v-else class="user-details">
        <div class="edit-with-label">
          <label for="name_modify">이름</label>  
          <input v-model="name" id="name_modify" name="name_modify" type="text"/>
        </div>

    </div>

    <!-- 이메일 -->
    <div v-if="isInfo" class="user-details" id="email">
      <div class="user-details-with-label">
          <label for="email">이메일</label>  
          {{email}}
      </div>
      <!-- <p>이메일: {{ email }}</p> -->
    </div>
    <div v-else class="user-details">
      <div class="edit-with-label">
        <label for="email_modify">이메일</label>  
        <input v-model="email" id="email_modify"  name="email_modify" type="text"/>
      </div>
    </div>

    <!-- 생년월일 -->
    <div v-if="isInfo" class="user-details" id="birth">
      <div class="user-details-with-label">
          <label for="birth">생년월일</label>  
          {{birth}}
      </div> 
      <!-- <p>생년월일: {{ birth }}</p> -->
    </div>
    <div v-else class="user-details">
      <div class="edit-with-label">
        <label for="birth_modify">생년월일</label>  
        <input v-model="birth" id="birth_modify"  name="birth_modify" type="date"
        data-date-picker="activated"/>
      </div>
    </div>

    <!-- 성별 -->
    <div v-if="isInfo" class="user-details" id="gender">
      <div class="user-details-with-label">
          <label for="gender">성별</label> 
          {{gender}}
      </div>
      <!-- <p>성별 : {{ gender }}</p> -->
    </div>
  
    <div v-else class="">
      <div class="edit-with-label">
        <label for="gender">성별</label>
      </div>
      <div class="mypage-radio-btn-group">
        <div class="mypage-radio">
            <input type="radio" value="Male" v-model="gender"  id="male_modify" name="male_modify"/>
            <label for="male_modify">Male</label>
          </div>
        
          <div class="mypage-radio">
            <input type="radio" value="Female" v-model="gender" id="female_modify" name="female_modify"/>
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
export default {
  name: "Info",
  data() {
    return {
      choices: [],
      isInfo: true,
      user: [
        {
          name: "xxx",
          email: "xxxxxxxx@naver.com",
          birth: "xxxx.xx.xx",
          gender: "Female"
        }
      ],
      name: "xxx",
      email: "xxxxxxx@naver.com",
      birth: "xxxx.xx.xx",
      gender: "Female"
    };
  },
  methods: {
    change() {
      //수정하기 버튼 클릭
      this.isInfo = false;
    },
    cancle() {
      //수정하기 - 취소 버튼 클릭
      this.isInfo = true;
    },
    ok() {
      //수정하기 - 확인 버튼 클릭
      this.isInfo = true;
    }
  }
};
</script>

<style>
</style>

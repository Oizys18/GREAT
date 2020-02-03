<template>
  <div class="">
    <!-- 이름 -->
    <div v-if="isInfo" class="user-details" id="name">
      이름:&nbsp;{{ name }}

        <v-btn
        color="blue-grey"
        class="ma-2 white--text"
        v-on:click="change"
        >
          Edit<v-icon right>mdi-pencil</v-icon> 
        </v-btn>
        <!-- <button class="btn-modify" v-on:click="change">내 정보 수정</button> -->
      
      
    </div>
    <div v-else class="user-details">
      <p>
        이름:
        <input
          type="text"
          id="name_modify"
          name="name_modify"
          class="user-modify"

          v-model="name"
        />
      </p>
    </div>

    <!-- 아이디 -->
    <div v-if="isInfo" class="user-details" id="email">
      <p>이메일: {{ email }}</p>
    </div>
    <div v-else class="user-details">
      <p>
        이메일:
        <input
          type="text"
          id="email_modify"
          name="email_modify"
          class="user-modify"
          v-model="email"
        />
      </p>
    </div>

    <!-- 생년월일 -->
    <div v-if="isInfo" class="user-details" id="birth">
      <p>생년월일: {{ birth }}</p>
    </div>
    <div v-else class="user-details">
      <p>
        생년월일:
        <input
          type="text"
          id="birth_modify"
          name="birth_modify"
          class="user-modify"
          v-model="birth"
        />
      </p>
    </div>

    <!-- 성별 -->
    <div v-if="isInfo" class="user-details" id="gender">
      <p>성별 : {{ gender }}</p>
    </div>
  
    <div v-else class="gender-box">
          
                
      <div class="radio-btn-group">
        성별:  
        <div class="radio">
          <input type="radio" value="Male" v-model="gender"  id="male_modify" name="male_modify"/>
          <label for="male_modify">Male</label>
        </div>
        <div class="radio">
          <input type="radio" value="Female" v-model="gender" id="female_modify" name="female_modify"/>
          <label for="female_modify">Female</label>
        </div>
      </div>

          <!-- <label><input type="radio" value="Male" v-model="gender"  id="male_modify" name="male_modify" >Male</label>
          <label><input type="radio" value="Female" v-model="gender" id="female_modify" name="female_modify">Female</label> -->
      
                <!-- <input type="radio" v-model="gender" id="male_modify" name="male_modify" class="" :value="Male" checked />
                <lable for="male_modify">Male</lable>

                <input type="radio" v-model="gender" id="female_modify" name="female_modify" class="" :value="Female" checked /> 
                <lable for="female_modify">Female</lable>  -->
               
      </div>
    
    <div v-if="!isInfo" class="user-details">
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
    //   this.name = this.$refs.name_modify.value;
    //   this.email = "";
    //   this.birth = "";
    //   this.gender = "";

      this.isInfo = true;
    }
  }
};
</script>

<style>
</style>

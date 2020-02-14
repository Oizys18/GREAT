<template>
  <div class="mypage-container">
    <div class="name-container">
      <h2>{{this.$store.state.userInfo.email}}</h2>
    </div>

    <v-tabs class="tab-container" color="#FFA578">
      <FoodTab />
      <GridTab />
      <InfoTab />

      <!-- Food  -->
      <v-tab-item vertical class="box-container" id="tab-food">
        <div>
          <v-card flat>
            <div class="contents">
              <FoodList />
            </div>
          </v-card>
        </div>
      </v-tab-item>

      <!-- Grid  -->
      <v-tab-item vertical class="box-container" id="tab-grid">
        <div>
          <v-card flat>
            <div class="contents">
              <!-- <p>grid bookmark lists</p> -->
              <GridList />
            </div>
          </v-card>
        </div>
      </v-tab-item>

      <v-tab-item vertical class="box-container" id="tab-info">
        <div>
          <v-card flat>
            <div class="contents">
              <!-- <p>grid bookmark lists</p> -->
              <Info />
            </div>
          </v-card>
        </div>

        <v-divider></v-divider>

        <div class="part-container">
          <p>🍴 🙋‍♂️ 내가 남긴 리뷰 🚩 📝</p>
          <!-- card components -->
          <Reviews />
        </div>
      </v-tab-item>
    </v-tabs>
  </div>
</template>

<script>
import "@/assets/style/css/mypageStyle.css";
import FoodTab from "@/components/Tab/FoodTab.vue";
import GridTab from "@/components/Tab/GridTab.vue";
import InfoTab from "@/components/Tab/InfoTab.vue";
import Info from "@/components/Tab/Info.vue";
import Reviews from "@/components/Tab/Reviews.vue";
import FoodList from "@/components/Tab/FoodList.vue";
import GridList from "@/components/Tab/GridList.vue";
import MypageApi from "@/apis/MypageApi.js";

export default {
  name: "Mypage",
  components: {
    FoodTab,
    GridTab,
    InfoTab,
    Info,
    Reviews,
    GridList,
    FoodList
  },
  data() {
    return {
      tab: null,
      userName: "",
      tabs: ["Food", "Grid", "Info"],
      currentTab: 0
    };
  },
  computed: {
    gridbookmarks: function() {
      return this.$store.state.gridbookmarks;
    },
    
  },
  mounted: function() {
    //로그인한 사용자 회원 정보 요청
    if (localStorage.getItem("token").length <= 10) {
      //로그인하지 않은 경우
      console.log("로그인 안함");

      alert("로그인을 먼저 해주세요.");
      this.$router.push("/");
    } else {
      //로그인 한 경우
      console.log("로그인함");

      MypageApi.setID();
      MypageApi.requestUserInfo(response=>{
        this.$store.commit('userInfo',response);
      })
      MypageApi.requestStorebookmarkList(response=>{
        console.log('storelist 요청 성공쓰')
        this.$store.commit('userStoreList',response);
      })
      MypageApi.requestMyReviews(response=>{
      console.log('요청받은 myreviews')
      console.log(response)
      this.$store.commit('userReviewList',response);
      })
    }
  },
  methods: {
    setName(name) {
      console.log("전달받은 이름:" + name);
      this.userName = name;
    }
  }
};
</script>
<style>
.myp-tab {
  position: relative;
  top: 10vh;
  left: 0;
  max-height: 300px;
}
.contents {
  max-height: 300px;
}
</style>

<template>
  <div class="mypage-wrapper">
    <div class="mypage-container">
      <div class="name-container">
        <div v-if="this.$store.state.userInfo != null">
          <h2>{{ this.$store.state.userInfo.email }}</h2>
        </div>
      </div>
      <div class="tab-wrapper">
        <v-tabs class="tab-container" color="#DFD7AF">
          <StoreTab />
          <GridTab />
          <InfoTab />

          <!-- Store  -->
          <v-tab-item vertical class="store-box-container" id="tab-store">
            <div>
              <v-card flat>
                <div class="contents">
                  <StoreList />
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
    </div>
  </div>
</template>

<script>
import "@/assets/style/css/mypageStyle.css";
import StoreTab from "@/components/Tab/StoreTab.vue";
import GridTab from "@/components/Tab/GridTab.vue";
import InfoTab from "@/components/Tab/InfoTab.vue";
import Info from "@/components/Tab/Info.vue";
import Reviews from "@/components/Tab/Reviews.vue";
import StoreList from "@/components/Tab/StoreList.vue";
import GridList from "@/components/Tab/GridList.vue";
import MypageApi from "@/apis/MypageApi.js";
import GridApi from '@/apis/GridApi.js';
export default {
  name: "Mypage",
  components: {
    StoreTab,
    GridTab,
    InfoTab,
    Info,
    Reviews,
    GridList,
    StoreList
  },
  data() {
    return {
      tab: null,
      userName: "",
      tabs: ["Food", "Grid", "Info"],
      currentTab: 0
    };
  },
  computed: {},
  mounted: function() {
    //로그인한 사용자 회원 정보 요청
    
    if (sessionStorage.getItem("token")==null||
      sessionStorage.getItem("token").length <= 10 ) {
      //로그인하지 않은 경우
      alert("로그인을 먼저 해주세요.");
      this.$router.push("/authentication");
    } else {
      //로그인 한 경우

      // MypageApi.setID();
      MypageApi.requestUserInfo(response=>{
        this.$store.commit('userInfo',response);
      })
      GridApi.requestBookmarkStoreList(sessionStorage.getItem('id'), response => {
      this.$store.state.bookmarkStoreList = response
      })
      // MypageApi.requestStorebookmarkList(response=>{
      //   this.$store.commit('userStoreList',response);
      // })
      MypageApi.requestGridbookmarkList(response=>{
        this.$store.commit('userGridList',response);
      })
      MypageApi.requestMyReviews(response=>{
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
.contents {
  max-height: 300px;
}
</style>

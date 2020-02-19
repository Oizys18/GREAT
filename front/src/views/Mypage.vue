<template>
  <div class="mypage-wrapper">
    <div class="mypage-container">
      <div class="name-container">
        <div v-if="this.$store.state.userInfo != null">
          <h2>{{ this.$store.state.userInfo.email }}</h2>
        </div>
      </div>
      <div class="tab-wrapper">
        <v-tabs v-model="active_tab" class="tab-container" color="rgb(248,248,255)">
          <!-- <v-tab v-for="tab of tabs" :key="tab.index" href='#tab-info'  class="tab-category ">{{tab.name}} </v-tab> -->
          
          <v-tab :key=0 href="#tab-store" class="tab-category "> Store </v-tab>
          <v-tab :key=1 href="#tab-grid"  class="tab-category "> Grid </v-tab>
          <v-tab :key=2 href="#tab-info"  class="tab-category "> info </v-tab> 
         

          <!-- Store  -->
          <v-tab-item vertical class="store-box-container" id="tab-store">
              <v-card flat>
                <div class="contents">
                  <StoreList />
                </div>
              </v-card>
          </v-tab-item>

          <!-- Grid  -->
          <v-tab-item vertical class="box-container" id="tab-grid">
              <v-card flat>
                <div class="contents">
                  <!-- <p>grid bookmark lists</p> -->
                  <GridList />
                </div>
              </v-card>
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
//import StoreTab from "@/components/Tab/StoreTab.vue";
// import GridTab from "@/components/Tab/GridTab.vue";
//import InfoTab from "@/components/Tab/InfoTab.vue";

import Info from "@/components/Tab/Info.vue";
import Reviews from "@/components/Tab/Reviews.vue";
import StoreList from "@/components/Tab/StoreList.vue";
import GridList from "@/components/Tab/GridList.vue";
import MypageApi from "@/apis/MypageApi.js";
import GridApi from '@/apis/GridApi.js';
export default {
  name: "Mypage",
  components: {
    //StoreTab,
    // GridTab,
    //InfoTab,
    Info,
    Reviews,
    GridList,
    StoreList
  },
  data() {
    return {
      userName: "",
      tabs: [
        { index: 0, name: "Store" ,page:'#tab-store'},
        { index: 1, name: "Grid" , page:'#tab-grid'},
        { index: 2, name: "Info" , page:'#tab-info'}
      ],
      active_tab:'tab-store',
    };
  },
  watch:{
    active_tab(){
      console.log("tab::"+this.active_tab)
    }
  },
  computed: {},
  mounted: function() {
    //로그인한 사용자 회원 정보 요청
    // this.active_tab =2;
    if(this.$store.state.tabFlag){
      this.active_tab ='tab-grid';
      this.$store.state.tabFlag=false;
    }
    console.log(window.history)
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
  
</style>

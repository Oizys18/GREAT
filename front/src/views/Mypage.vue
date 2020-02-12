<template>
  <div class="mypage-container">
    <div class="name-container">
      <h2>{{ name }}</h2>
    </div>

    <v-tabs class="tab-container"
     color="#FFA578">
      <FoodTab />
      <GridTab />
      <InfoTab />

      <!-- Food  -->
      <v-tab-item vertical class="box-container" id="tab-food">
        <div>
          <v-card flat>
            <div class="contents">
              <FoodList/>
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
                <Info/>
              </div>
            </v-card>
        </div>

          <v-divider ></v-divider>

          <div class="part-container">
              <p> 🍴 🙋‍♂️ 내가 남긴 리뷰 🚩 📝  </p>
              <!-- card components -->
              <Reviews/>
          </div>
      </v-tab-item>
      
    </v-tabs>
</div>
</template>

<script>
import '@/assets/style/css/mypageStyle.css'
import FoodTab from "@/components/Tab/FoodTab.vue";
import GridTab from "@/components/Tab/GridTab.vue";
import InfoTab from "@/components/Tab/InfoTab.vue";
import Info from "@/components/Tab/Info.vue";
import Reviews from "@/components/Tab/Reviews.vue";
import FoodList from "@/components/Tab/FoodList.vue";
import GridList from "@/components/Tab/GridList.vue";
import MypageApi from '@/apis/MypageApi.js';

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
      name: "",
      tabs: ["Food", "Grid", "Info"],
      currentTab: 0
    };
  },
  computed: {
    gridbookmarks: function() {
      return this.$store.state.gridbookmarks;
    }
  },
  mounted: function() {
    //로그인한 사용자 회원 정보 요청
    MypageApi.setID();
    MypageApi.requestUserInfo(response => {
      this.name = response.name;
    });
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
.contents{
  max-height: 300px;
  
}
</style>












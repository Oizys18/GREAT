<template>
  <div class="mypage-container">
    <div class="name-container">
      <h2>{{ name }}</h2>
    </div>

    <v-tabs class="tab-container"
     color="#FFA578"  >
      <FoodTab />
      <GridTab />
      <InfoTab />

      <!-- Food  -->
      <v-tab-item vertical class="box-container" id="tab-food">
        <div>
          <v-card flat>
            <div class="contents">
              <p>food bookmark</p>
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
          <div class="part-container">
            <v-card flat>
              <Info />
            </v-card>
          </div>
          
          <!-- <hr /> -->
          <v-divider ></v-divider>
          
          <div class="part-container">
            <p>★ 내가 남긴 리뷰 ★</p>
              <!-- card components -->
              <Reviews/>
            </div>
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

import GridList from "@/components/Tab/GridList.vue";

export default {
  name: "Mypage",
  components: {
    FoodTab,
    GridTab,
    InfoTab,
    Info,
    Reviews,
    GridList
  },
  data() {
    return {
      tab: null,
      
      name: "User Name",
      email: "xxxxxxx@naver.com",
      birth: "xxxx.xx.xx",
      gender: "Female",
     
     
    }
  },
  computed:{
    gridbookmarks: function(){
      return this.$store.state.gridbookmarks;
    }
  }

};
</script>
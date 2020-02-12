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
              <TabFood/>
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
              <p> 🍴 🙋‍♂️ 내가 남긴 리뷰 🚩 📝  </p>
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
import TabFood from "@/components/Tab/TabFood.vue"
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
    TabFood,
  },
  data() {
    return {
      tab: null,
      name: "",
    }
  },
  computed:{
    gridbookmarks: function(){
      return this.$store.state.gridbookmarks;
    }
  },
  mounted:function(){ 
     //로그인한 사용자 회원 정보 요청
    MypageApi.setID()
     MypageApi.requestUserInfo(response=>{
      this.name=response.name;

    })


  
  }

};
</script>
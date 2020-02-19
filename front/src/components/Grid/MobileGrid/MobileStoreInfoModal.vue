<template>
  <div
    v-if="storeInfo != null"
    id="sidebar-1"
    class="mobile-modal-container animated bounce"
    style="overflow-y:auto; 
          background-color:white;
          position: relative;
          top: 0vh;
          "
    >
    <ImageInfo :url="storeInfo.image" />
    <button v-on:click="exitModal" >
        <div class="storeInfo-modal-collide">✖</div>
      </button>
    <div class="sidebar-text" style="top: 0vh;">
      <TitleText :textInfo="storeInfo" />
    </div>

    <!-- <TextInfo :textInfo="storeInfo" /> -->
    <div class="sidebar-tab">
      <button
        v-for="(tab, idx) in tabs"
        class="sidebar-tab-button"
        :id="'sidebar-tab' + idx"
        :class="{ active: currentTab === idx }"
        :key="`${tab}-${idx}`"
        @click="tabSelect(idx)"
      >
        {{ tab }}
      </button>
    </div>
    <div class="sidebar-tab-content">
      <div v-show="currentTab == 0"><TextInfo :textInfo="storeInfo" /></div>
      <div v-show="currentTab == 1">
        <ReviewInfo :storeId="storeInfo.id"/>
      </div>
      <div v-show="currentTab == 2">
        <MapApp class="modal-map" :store_id="storeInfo.id"/>
      </div>
    </div>
  </div>
</template>

<script>
import "@/assets/style/css/mypageStyle.css";
import "@/assets/style/css/Sidebar.css";
import ImageInfo from "@/components/Sidebar/ImageInfo";
import TextInfo from "@/components/Sidebar/TextInfo";
import TitleText from "@/components/Sidebar/TitleText";
import ReviewInfo from "@/components/Sidebar/ReviewInfo";
import MapApp from "@/components/common/MapApp";
// import GridApi from '@/apis/GridApi.js';
export default {
  name: "Sidebar",
  components: {
    ImageInfo,
    TextInfo,
    TitleText,
    ReviewInfo,
    MapApp,
    // GridApi
  },
  data(){
    return{
      isClicked:false,
      currentTab: 0,
      tabs: ["상세정보", "리뷰", "지도"]
    }
  },
  computed: {
    storeInfo() {
      return this.$store.state.storeInfo;
    },
    reviewInfo() {
      return this.$store.state.reviewInfo;
    },
    
  },
  methods: {
    exitModal(){
        this.isClicked=true;
        this.$emit('exit_Clicked',this.isClicked)
    },
    tabSelect(idx) {
      var prevBtn = document.getElementById("sidebar-tab" + this.currentTab)
      prevBtn.style = "background-color: #fbedeb"
      this.currentTab = idx
      var selectedBtn = document.getElementById("sidebar-tab" + idx)
      selectedBtn.style = "background-color: #c2bcbca8"
    }
  }
};
</script>

<style scoped>

.modal-map{
  position: relative;
  left:0vw;
  width: 80vw;
  height: 42vh;
  background-color: red;
  }
</style>

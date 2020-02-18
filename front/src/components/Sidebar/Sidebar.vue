<template>
  <div
    v-if="storeInfo != null"
    id="sidebar-1"
    class="sidebar-container animated bounceInLeft delay:0.05s"
  >
    <ImageInfo :url="storeInfo.image" />
    <div class="sidebar-text">
      <TitleText :textInfo="storeInfo" />
    </div>
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
        <MapApp class="sidebar-map" :store_id="storeInfo.id"/>
      </div>
    </div>
    <button @click="collide"><SidebarCollide /></button>
  </div>
</template>

<script>
import "@/assets/style/css/Sidebar.css";
import ImageInfo from "@/components/Sidebar/ImageInfo";
import TextInfo from "@/components/Sidebar/TextInfo";
import TitleText from "@/components/Sidebar/TitleText";
import ReviewInfo from "@/components/Sidebar/ReviewInfo";
import SidebarCollide from "@/components/Sidebar/SidebarCollide";
import MapApp from "@/components/common/MapApp";
import GridApi from '@/apis/GridApi.js'
export default {
  name: "Sidebar",
  data() {
    return {
      currentTab: 0,
      tabs: ["상세정보", "리뷰", "지도"]
    };
  },
  components: {
    ImageInfo,
    TextInfo,
    ReviewInfo,
    TitleText,
    MapApp,
    SidebarCollide
  },
  mounted: function() {
    if(this.storeInfo != null) this.tabSelect(0)
    var userId = sessionStorage.getItem('id')
    if(userId != null) {
      GridApi.requestBookmarkStoreList(userId, response => {
        this.$store.state.bookmarkStoreList = response
      })
    }
    
  },
  computed: {
    storeInfo() {
      return this.$store.state.storeInfo;
    }
  },
  watch: {
    storeInfo() {
      this.tabSelect(0)
    }
  },
  methods: {
    collide() {
      var sidebar = document.getElementById("sidebar-1");
      sidebar.classList.remove("bounceInLeft");
      sidebar.classList.add("bounceOutLeft");
      this.$store.state.storeInfo = null
    },
    tabSelect(idx) {
      var prevBtn = document.getElementById("sidebar-tab" + this.currentTab)
      if(prevBtn != null) prevBtn.style = "background-color: #fbedeb"
      this.currentTab = idx
      var selectedBtn = document.getElementById("sidebar-tab" + idx)
      if(selectedBtn != null) selectedBtn.style = "background-color: #c2bcbca8"
    }
  }
};
</script>

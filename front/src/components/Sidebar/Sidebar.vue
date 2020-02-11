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
        :class="{ active: currentTab === idx }"
        :key="`${tab}-${idx}`"
        @click="currentTab = idx"
      >
        {{ tab }}
      </button>
      <div class="sidebar-tab-content">
        <div v-show="currentTab == 0"><TextInfo :textInfo="storeInfo" /></div>
        <div v-show="currentTab == 1">
          <ReviewInfo :reviewInfo="reviewInfo" />
        </div>
        <div v-show="currentTab == 2"><MapApp /></div>
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
  computed: {
    storeInfo() {
      return this.$store.state.storeInfo;
    },
    reviewInfo() {
      return this.$store.state.reviewInfo;
    }
  },
  methods: {
    collide() {
      var sidebar = document.getElementById("sidebar-1");
      sidebar.classList.remove("bounceInLeft");
      sidebar.classList.add("bounceOutLeft");
    }
  }
};
</script>

<style>
.sidebar-tab{

}
.sidebar-tab-button {
  margin-top: 3vh;
  width: 8.5vw;
  height: 4vh;
  border: 1px solid black;
  background-color: silver;
  font-size: 1rem;
}
</style>

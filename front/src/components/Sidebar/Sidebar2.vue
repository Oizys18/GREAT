<template>
  <div
    v-if="storeInfo != null"
    id="sidebar-1"
    class="sidebar-container animated bounceInLeft delay:0.05s"
  >
    <ImageInfo :url="storeInfo.image" />
    <TextInfo :textInfo="storeInfo" />
    <ReviewInfo :reviewInfo="reviewInfo" />
    <button @click="collide"><SidebarCollide /></button>
  </div>
</template>

<script>
import "@/assets/style/css/Sidebar.css";
import ImageInfo from "@/components/Sidebar/ImageInfo";
import TextInfo from "@/components/Sidebar/TextInfo";
import ReviewInfo from "@/components/Sidebar/ReviewInfo";
import SidebarCollide from "@/components/Sidebar/SidebarCollide";
export default {
  name: "Sidebar",
  components: {
    ImageInfo,
    TextInfo,
    ReviewInfo,
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

<style></style>

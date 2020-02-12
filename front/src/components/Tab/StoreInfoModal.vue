<template>
  <div
    v-if="storeInfo != null"
    id=""
    class="storeInfo-modal-container "
  >
    <ImageInfo :url="storeInfo.image" />
    <TextInfo :textInfo="storeInfo" />
    <ReviewInfo :reviewInfo="reviewInfo" />
    <button @click="isClicked=false"><SidebarCollide /></button>
  </div>
</template>

<script>
import "@/assets/style/css/mypageStyle.css";

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
  }
};
</script>

<style></style>

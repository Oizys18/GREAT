<template>
  <div
    v-if="storeInfo != null"
    id=""
    class="storeInfo-modal-container "
  >
    <!-- <ImageInfo :url="storeInfo.image" /> -->
    
    <div class="storeImfo-modal-img-container">
      <img v-if="storeInfo.image != '' && storeInfo.image != undefined" class="storeInfo-modal-image" :src="storeInfo.image"/>
      <img v-else class="storeInfo-modal-image" :src="'https://lh3.googleusercontent.com/proxy/CD2ZqgBphAIOBMokl0H0YNGwtfZqMvfM3WV5HYNz9XklOtVntWTAaRSJ28_M5RYFIv8JWX9I1pnfPsocZwbM9UrXkoJY3Rk9eASmz9GZYkRLPrauw947xXEdFBA_idHRFix4PJtHYkx6e2OiTGYFwS9b0YmG3lC5kqVZR08kpFvHMeGvRNNabcq1yw_PAE8Nmcb22S3BgzcD-VOjNqKBrY80NYZatzGmZ4YDbjg6Z6C4zy1zpBaJb-NSca2l7g0QboXLn8ZPW3Bz13RbGaUCMgyRrkcq'"> 
      
      <button v-on:click="exitModal" >
        <div class="storeInfo-modal-collide">✖</div>
      </button>

    </div>

    <TextInfo :textInfo="storeInfo" />
    <!-- <ReviewInfo :reviewInfo="reviewInfo" /> -->
    
  </div>
</template>

<script>
import "@/assets/style/css/mypageStyle.css";

// import ImageInfo from "@/components/Sidebar/ImageInfo";
import TextInfo from "@/components/Sidebar/TextInfo";
// import ReviewInfo from "@/components/Sidebar/ReviewInfo";
// import SidebarCollide from "@/components/Sidebar/SidebarCollide";
export default {
  name: "Sidebar",
  components: {
    // ImageInfo,
    TextInfo,
    // ReviewInfo,
    // SidebarCollide
  },
  data(){
    return{
      isClicked:false,
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
  }
};
</script>

<style></style>

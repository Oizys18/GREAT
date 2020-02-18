<template>
  <div
    v-if="storeInfo != null"
    id=""
    class="storeInfo-modal-container "
  >
    
    <div class="storeImfo-modal-img-container">
      <img v-if="storeInfo.image !==null || storeInfo.image != undefined" class="storeInfo-modal-image" :src="storeInfo.image"/>
      <img v-else class="storeInfo-modal-image" :src="'https://i.imgur.com/vpGJQAk.jpg'"> 
      
      <button v-on:click="exitModal" >
        <div class="storeInfo-modal-collide">✖</div>
      </button>

    </div>

    <div class="">
      <TitleText :textInfo="storeInfo" />
    </div>

    <TextInfo :textInfo="storeInfo" />
    
  </div>
</template>

<script>
import "@/assets/style/css/mypageStyle.css";

// import ImageInfo from "@/components/Sidebar/ImageInfo";
import TextInfo from "@/components/Sidebar/TextInfo";
import TitleText from "@/components/Sidebar/TitleText";
export default {
  name: "Sidebar",
  components: {
    TextInfo,
    TitleText,
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

<template>
  <!-- <div class="foodbookmark-item">
    <img src="@/assets/img/cafe.png" class="foodgridbookmark-img" >
    <div class="foodgridbookmark-box">
      <div class="foodgridbookmakr-hover-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </div>
    </div>
   </div> -->
  <div class="hvrbox" @click="showStoreDetail(store.id)"
  >
    <img
      :src="store.image" 
      alt="image"
      class="hvrbox-layer_bottom"
    />
    <div class="hvrbox-layer_top">
      <div class="hvrbox-text">
        {{store.name}}<br/><br/>
        📍 {{store.location_name}}<br/>
        <StarRating :rating= "store.rating"/>
      </div>
    </div>

    <v-dialog v-model="isClicked"  max-width="30vw"  height="100%">
       <!-- store info-->
      <StoreInfoModal @exit_Clicked="exit_Modal"/>
    </v-dialog>

  </div>
</template>

<script>
import StarRating from "../common/StarRating.vue";
import GridApi from '../../apis/GridApi'
import StoreInfoModal from '@/components/Tab/StoreInfoModal.vue';
export default {
  name: "FoodBookmark",
  props: ["FoodBookmarkItem","isChecked","store"],
  components: {
    StarRating,
    StoreInfoModal,
  },
  data(){
    return{
      isClicked:false,
    }
  },
  methods: {
    showStoreDetail(id) {
      console.log("클릭한 store id:" + id);
      this.isClicked=true;

      GridApi.requestStoreInfo(id, response => {
        this.$store.state.storeInfo = response;
      });
    },
    exit_Modal(flag){
      this.isClicked=!flag;
    }
  }
};
</script>

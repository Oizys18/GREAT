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

    <img v-if="store.image != '' && store.image != undefined && store.image != null"
      :src="store.image" 
      alt="image"
      class="hvrbox-layer_bottom"
    />
    <img v-else class="hvrbox-layer_bottom"
      :src="'https://i.imgur.com/vpGJQAk.jpg'"
    >

    <div class="hvrbox-layer_top">
      <div class="hvrbox-text">
        {{store.name}}<br/><br/>
        📍 {{store.location_name}}<br/>
        <StarRating :rating= "store.rating"/>
      </div>
    </div>

    
    <v-dialog v-model="isClicked"   class="storeInfo-modal-dialog" @close="isClicked"  >
      <StoreInfoModal @exit_Clicked="exit_Modal" />
    </v-dialog>

  </div>
</template>

<script>
import StarRating from "@/components/common/StarRating.vue";
import GridApi from '@/apis/GridApi'
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
      this.isClicked=true;

      GridApi.requestStoreInfo(id, response => {
        this.$store.state.storeInfo = response;
      });
    },
    exit_Modal(flag){
      this.isClicked=!flag;
       this.$store.state.storeInfo=null;
    }
  }
};
</script>

<template> 
  <!--food grid bookmark -->
  <div class="">
     <span v-for="store in storeList" :key=store.id>
          <!-- {{store.id}} -->
         <StoreBookmark :store=store />
     </span>
  </div>
</template>
 
<script>
//import MypageApi from '../../apis/MypageApi'
import GridApi from '@/apis/GridApi'
import StoreBookmark from "@/components/Tab/StoreBookmark.vue"
export default {
  name: "FoodList",
  components:{
      StoreBookmark,
  },
  data() {
    return {
     
    };
  },
 computed: {
    storeList: function() {
      //return this.$store.state.userStoreList;
      return this.$store.state.bookmarkStoreList
    },
    
  },
  mounted:function(){
    
    GridApi.requestStoreInfo(sessionStorage.getItem('id'), response => {
        this.$store.state.storeInfo = response;
    });
  }
};
</script>
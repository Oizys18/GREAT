<template> 
  <!--food grid bookmark -->
  <div class="tab-food-box" >
     <span v-for="n in 10" :key=n>
    
         <FoodBookmark/>
         
     </span>


   </div>
</template>
 
<script>
import MypageApi from '../../apis/MypageApi'
import FoodBookmark from "@/components/Tab/FoodBookmark.vue"
export default {
  name: "TabFood",
  components:{
      FoodBookmark,
  },
  mounted:function(){
    //사용자의 food bookmark list를 요청
    MypageApi.requestFoodbookmarkList(this.user.id,response=>{
      console.log(response)
      this.$stroe.state.userFoodBookmarkList=response
    })
  }
};
</script>

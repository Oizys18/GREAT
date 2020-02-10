<template>
  <div class="tab-food-box" >
     <span v-for="n in 3" :key=n>
         <FoodBookmark/>
     </span>


   </div>
</template>
 
<script>
import FoodBookmark from "@/components/Tab/FoodBookmark.vue"
export default {
  name: "TabFood",
  components:{
      FoodBookmark,
  }
};
</script>
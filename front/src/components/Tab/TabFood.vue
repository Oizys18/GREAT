<<<<<<< HEAD
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
 
=======
>>>>>>> 81ad5b86f57226996fcc6335cc6397b8708d49b0

<template>
  <div class="big-container">
    <div class="big-grid">
      <div class="big-box"><MainFoodGrid :num="0" /></div>
      <div class="cross-box"><MainFoodGrid :num="1" /></div>
      <div class="big-box"><MainFoodGrid :num="2" /></div>
      <div class="cross-box"><MainFoodGrid :num="3" /></div>
      <div><FoodCategory /></div>
      <div class="cross-box"><MainFoodGrid :num="4" /></div>
      <div class="big-box"><MainFoodGrid :num="5" /></div>
      <div class="cross-box"><MainFoodGrid :num="6" /></div>
      <div class="big-box"><MainFoodGrid :num="7" /></div>
    </div>
  </div>
</template>

<script>
import "@/assets/style/css/gridStyle.css";
import MainFoodGrid from "@/components/Grid/MainFoodGrid.vue";
import FoodCategory from "@/components/Grid/FoodCategory.vue";
export default {
  name: "Table",
  components: {
    MainFoodGrid,
    FoodCategory
  }
};
</script>

<style>


</style>

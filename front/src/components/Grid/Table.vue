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
import "@/assets/style/css/gridStyle.css"
import MainFoodGrid from "@/components/Grid/MainFoodGrid.vue"
import FoodCategory from "@/components/Grid/FoodCategory.vue"
import GridApi from '../../apis/GridApi.js'

export default {
  name: "Table",
  components: {
    MainFoodGrid,
    FoodCategory
  },
  mounted() {
    var x = this.$store.state.locationX
    var y = this.$store.state.locationY
    var categories = this.$store.state.categories
    for(var i = 0; i < categories.length; i++){
      var categoryName = categories[i].name
      var categoryId = categories[i].id
      this.apiCall(categoryId, categoryName, x, y)
    }
  },
  methods: {
    apiCall(categoryId, categoryName, x, y) {
      var data = {
        locationX : x,
        locationY : y,
        category : categoryId
      }
      GridApi.requestGridStores(data, response => {
        for(var i = response.length; i < 8; i++){
          response.push({"name": ""})
        }
        this.$store.commit(categoryName, response)
      })
    }
  },
};
</script>

<style>


</style>

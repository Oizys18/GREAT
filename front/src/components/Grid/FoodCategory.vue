<template>
  <div class="category-grid">
    <div class="center-box"><img id="category-image1" class="category-image" src="../../assets/img/korean.png" /></div>
    <div class="center-box"><img id="category-image2" class="category-image" src="../../assets/img/japanese.png" /></div>
    <div class="center-box"><img id="category-image3" class="category-image" src="../../assets/img/chinese.png" /></div>
    <div class="center-box"><img id="category-image4" class="category-image" src="../../assets/img/asian.png" /></div>
    <div class="center-box location-box" @click="go('/searchMap')">Location</div>
    <div class="center-box"><img id="category-image5" class="category-image" src="../../assets/img/buffet.png" /></div>
    <div class="center-box"><img id="category-image6" class="category-image" src="../../assets/img/snack.png" /></div>
    <div class="center-box"><img id="category-image7" class="category-image" src="../../assets/img/cafe.png" /></div>
    <div class="center-box"><img id="category-image8" class="category-image" src="../../assets/img/guitar.png" /></div>
  </div>
</template>

<script>
import "@/assets/style/css/gridStyle.css";
export default {
  name: "FoodCategory",
  data() {
    return {};
  },
  mounted() {
    for(var i = 1; i <= 8; i++) {
      document.getElementById('category-image' + i).ondragstart = function() { return false; };
    }
  },
  methods: {
    go(link) {
      this.$router.push(link)
    }
  },
};
</script>

<style>
.location-box {
  cursor: pointer;
}
</style>

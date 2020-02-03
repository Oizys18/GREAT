<template>
  <div class="category-grid">
    <div class="center-box">{{ $store.state.categories[0] }}</div>
    <div class="center-box">{{ $store.state.categories[1] }}</div>
    <div class="center-box">{{ $store.state.categories[2] }}</div>
    <div class="center-box">{{ $store.state.categories[3] }}</div>
    <div class="center-box">Location</div>
    <div class="center-box">{{ $store.state.categories[4] }}</div>
    <div class="center-box">{{ $store.state.categories[5] }}</div>
    <div class="center-box">{{ $store.state.categories[6] }}</div>
    <div class="center-box">{{ $store.state.categories[7] }}</div>
  </div>
</template>

<script>
import "@/assets/style/css/gridStyle.css";
export default {
  name: "FoodCategory",
  data() {
    return {};
  },
};
</script>

<style></style>

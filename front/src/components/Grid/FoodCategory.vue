<template>
  <div class="category-grid">
    <div class="center-box">{{ $store.state.categories[0].name }}</div>
    <div class="center-box">{{ $store.state.categories[1].name }}</div>
    <div class="center-box">{{ $store.state.categories[2].name }}</div>
    <div class="center-box">{{ $store.state.categories[3].name }}</div>
    <div class="center-box">Location</div>
    <div class="center-box">{{ $store.state.categories[4].name }}</div>
    <div class="center-box">{{ $store.state.categories[5].name }}</div>
    <div class="center-box">{{ $store.state.categories[6].name }}</div>
    <div class="center-box">{{ $store.state.categories[7].name }}</div>
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

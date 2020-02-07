<template>
  <div>
    <img class="sidebar-image" :src="imageUrl"/>
  </div>
</template>

<script>
import '../../assets/style/css/Sidebar.css'
export default {
  name: "StoreImage",
  props: ["url"],
  computed: {
    imageUrl() {
      return this.url;
    }
  }
};
</script>

<style>
</style>
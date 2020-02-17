<template>
  <div>
    <img v-if="imageUrl != '' && imageUrl != undefined && imageUrl != null" class="sidebar-image" :src="imageUrl"/>
    <img v-else class="sidebar-image" :src="'https://i.imgur.com/vpGJQAk.jpg'"> 

  </div>
</template>

<script>
import '@/assets/style/css/Sidebar.css'
export default {
  name: "ImageInfo",
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
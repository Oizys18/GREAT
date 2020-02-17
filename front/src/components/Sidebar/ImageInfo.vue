<template>
  <div>
    <img v-if="imageUrl != '' && imageUrl != undefined && imageUrl != null" class="sidebar-image" :src="imageUrl"/>
    <img v-else class="sidebar-image" :src="'https://item.kakaocdn.net/do/a4f929470c263313e72afbf74ae34d79f43ad912ad8dd55b04db6a64cddaf76d'"> 

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
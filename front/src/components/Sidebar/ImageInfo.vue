<template>
  <div>
    <img v-if="imageUrl != '' && imageUrl != undefined && imageUrl != null" class="sidebar-image" :src="imageUrl"/>
    <img v-else class="sidebar-image" :src="'https://lh3.googleusercontent.com/proxy/CD2ZqgBphAIOBMokl0H0YNGwtfZqMvfM3WV5HYNz9XklOtVntWTAaRSJ28_M5RYFIv8JWX9I1pnfPsocZwbM9UrXkoJY3Rk9eASmz9GZYkRLPrauw947xXEdFBA_idHRFix4PJtHYkx6e2OiTGYFwS9b0YmG3lC5kqVZR08kpFvHMeGvRNNabcq1yw_PAE8Nmcb22S3BgzcD-VOjNqKBrY80NYZatzGmZ4YDbjg6Z6C4zy1zpBaJb-NSca2l7g0QboXLn8ZPW3Bz13RbGaUCMgyRrkcq'"> 
  </div>
</template>

<script>
import '../../assets/style/css/Sidebar.css'
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
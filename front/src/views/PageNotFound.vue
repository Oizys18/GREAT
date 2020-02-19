<template>
  <div id="pnf-container">
    <span class="four-icon">4</span>
    <div id="egg" class="animated jello infinite" @click="go('/')">
      <div id="eyeCont">
        <div class="eye a"></div>
        <div class="eye b"></div>
      </div>
      <div id="mouthCont">
        <div class="timido left"></div>
        <div id="mouth" ></div>
        <div class="timido right"></div>
      </div>
    </div>
    <span class="four-icon">4</span>
    <h1>Page Not Found</h1>
  </div>  
</template>

<script>
import "@/assets/style/css/pnf.css"
import "@/assets/style/css/animated.css"
export default {
  name: "PageNotFound",
  methods: {
    go(link) {
      this.$router.push(link)
    }
  },
};
</script>

<style></style>

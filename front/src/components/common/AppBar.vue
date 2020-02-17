<template>
  <div id="app-bar" class="animated fadeInDown delay-0.2s">
    <div class="app-bar-banner" @click="go('/')">GrEAT |</div>
    <div class="app-bar-banner" @click="go('authentication')">AUTH |</div>
    <div class="app-bar-banner" @click="go('mypage')">Mypage</div>
    <div class="app-bar-router">
      <BarButton />
    </div>
  </div>
</template>

<script>
import BarButton from '../common/BarButton.vue'
export default {
  components: {
    BarButton
  },
  data() {
    return {};
  },
  methods: {
    go(link) {
      this.$router.push(link);
    }
  }
};
</script>

<style>
#app-bar {
  z-index: 100;
  position: fixed;
  width: 100%;
  background: linear-gradient(72deg, #c0392b, #f1c40f);
  padding: 0.5em;
  font-size: 1em;
  display: flex;
  height:6vh;
  align-items: center;
}
.app-bar-banner {
  font-family: "Lobster", cursive;
  color: rgb(236, 236, 236);
  position: relative;
  cursor: pointer;
  font-size:1.5em;
  left: 0;
}
.app-bar-router {
  position: fixed;
  right: 0;
  padding: 0 10px 0 0;
}
</style>

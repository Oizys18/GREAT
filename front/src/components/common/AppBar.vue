<template>
  <div id="app-bar" class="animated fadeInDown delay-0.2s">
    <div class="app-bar-banner" @click="go('/')">GrEAT</div>
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
  /* background: linear-gradient(72deg, #c0392b, #f1c40f); */
  background: transparent;
  padding: 15px;
  font-size: 1.2em;
  display: flex;
}
.app-bar-banner {
  font-family: "Lobster", cursive;
  color: rgb(236, 236, 236);
  position: relative;
  cursor: pointer;
  font-size:2rem;
  text-shadow:0px 2px 2px black;
  left: 0;
}
.app-bar-router {
  position: fixed;
  right: 0;
  padding: 0 10px 0 0;
}
</style>

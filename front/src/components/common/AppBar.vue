<template>
  <div id="app-bar" class="animated fadeInDown delay-0.2s">
    <div class="bar-banner">GrEAT</div>
    <div class="bar-router">
      <router-link to="/">| index |</router-link>
      <router-link to="Main">| Main |</router-link>
      <router-link to="Authentication">| Auth |</router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style>
#app-bar {
  z-index: 100;
  position: fixed;
  width: 100%;
  background: linear-gradient(72deg, #c0392b, #f1c40f);
  padding: 10px;
  font-size: 1.2em;
  display: flex;
}
.bar-banner {
  font-family: "Lobster", cursive;
  color: rgb(236, 236, 236);
  position: relative;
  left: 0;
}
.bar-router {
  position: fixed;
  right: 0;
}
</style>

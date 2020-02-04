<template>
  <div id="app">
    <AppBar />
    <router-view />
  </div>
</template>
<script>
import AppBar from "@/components/common/AppBar.vue";
export default {
  name: "App",
  components: {
    AppBar
  },
  data() {
    return {};
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
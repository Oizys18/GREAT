<template>
  <div id="app">
    <v-app>
      <AppBar />
      <router-view />
    </v-app>
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
  font-family: "Noto Sans KR", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

</style>

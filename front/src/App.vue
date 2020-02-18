<template>
  <div id="app">
    <v-app>
      <NavBar :scrollPosition="this.scrollPosition"/>
      <router-view />
    </v-app>
  </div>
</template>
<script>
import NavBar from "@/components/common/NavBar.vue";
export default {
  name: "App",
  components: {
    NavBar
  },
  data() {
    return {
      scrollPosition: null
    };
  },
  methods:{
    updateScroll() {
      this.scrollPosition = window.scrollY
    }
  },
  mounted() {
    window.addEventListener('scroll', this.updateScroll);
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

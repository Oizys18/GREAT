<template>
<div>
  <div 
    v-if="!btnChange" 
    class="bar-btn" @click="go('Main')" 
    v-on:mouseover = "btnChange = true"
    v-on:mouseout = "btnChange = false">
  <span>Let's Start</span>
  </div>
  <div 
    v-else 
    class="bar-btn-hover" 
    @click="go('Main')" 
    v-on:mouseover = "btnChange = true"
    v-on:mouseout = "btnChange = false">
    <span>Let's Start</span>
    <img 
      src="@/assets/img/arrow-icon.png"
      class="btn-img"/>
  </div>
</div>
</template>

<script>
export default {
  name: "BarButton",
  methods: {
    go(link) {
      this.$router.push(link);
    }
  },
  data() {
    return {
      btnChange: false
    }
  }
};
</script>

<style>
.bar-btn {
  font-family: "Lobster", cursive;
  background-color: #fbedeb;
  padding: 3px 20px 3px 20px;
  font-size: 1.2em;
  cursor: pointer;
  border-radius: 25px;
  transition-duration: 0.5s;
}
.bar-btn-hover {
  font-family: "Lobster", cursive;
  background-color: #fbedeb;
  padding: 3px 40px 3px 20px;
  font-size: 1.2em;
  cursor: pointer;
  display: inline;
  border-radius: 25px;
  transition-duration: 0.5s;
}
.btn-img {
  height: 90%;
  position: absolute;
  margin-top: 2px;
}
</style>
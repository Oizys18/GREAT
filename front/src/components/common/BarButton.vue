<template>
<div>
  <div 
    class="bar-btn" 
    @click="go('Main')">
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
  display: inline;
  transition-duration: 0.5s;
}
.bar-btn img {
  display: none;
}
.bar-btn:hover {
  padding: 3px 40px 3px 20px;
}
.bar-btn:hover img {
  display: inline;
}
.btn-img {
  height: 90%;
  position: absolute;
  margin-top: 2px;
}
</style>
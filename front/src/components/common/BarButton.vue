<template>
<div>
  <div 
    class="bar-btn" 
    @click="go('main')">
  <span>Let's Start</span>
  <img 
      src="@/assets/img/arrow-icon.png"
      class="bar-btn-img"/>
  </div>
</div>
</template>

<script>
import '@/assets/style/css/barButton.css'
export default {
  name: "BarButton",
  methods: {
    go(link) {
      this.$router.push(link);
    }
  }
};
</script>

<template>
  <div>
    <div class="index-background">
      <div class="index-curtain">
        <div class="index-banner animated fadeInDown delay-0.2s">
          GrEat
        </div>
        <div class="index-card">
          ss
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "@/assets/style/css/animated.css";
export default {
  name: "Index",
  data() {
    return {};
  }
};
</script>

<style>
.index-background {
  background-image: url("https://cdn.vox-cdn.com/thumbor/XTn-0tqjh037qW59XLmXoMlxXjE=/0x0:2618x1472/1200x675/filters:focal(1100x527:1518x945)/cdn.vox-cdn.com/uploads/chorus_image/image/64045970/tacobell_7.0.0.1493054804.0.jpg");
  background-size: cover;
  height: 100vh;
  background-position: center;
  overflow-y: hidden;
  z-index: -1;
}

.index-curtain {
  background: -webkit-linear-gradient(
    rgb(0, 0, 0),
    rgba(0, 0, 0, 0.609),
    rgba(255, 255, 255, 0)
  );
  -webkit-text-fill-color: transparent;
  height: 100vh;
}

.index-banner {
  z-index: 2;
  position: flex;
  justify-content: center;
  font-size: 23vh;
  font-weight: bold;
  background: -webkit-linear-gradient(
    rgb(255, 0, 0),
    rgb(255, 81, 0),
    rgb(255, 238, 0)
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.index-card {
  z-index: 4;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

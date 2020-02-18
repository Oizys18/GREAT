<template>
  <div class="nav-bar animated fadeInDown delay-0.2s" id="navbar">
    <div class="nav-bar-banner-container">
      <div class="nav-bar-mainbanner" id="navbarMB" @click="go('/')">
        <img
          id="bt1"
          class="bt1"
          src="https://i.imgur.com/si3Uh5E.png"
          alt="GR"
        />
        <img
          id="bt2"
          class="bt2"
          src="https://i.imgur.com/enHnxlO.png"
          alt="EAT"
        />
        <!-- {{scrollPosition}} -->
        <img
          id="bt3"
          class="bt3"
          src="https://i.imgur.com/GvcutCs.png"
          alt="그래"
        />
        <img
          id="bt4"
          class="bt4"
          src="https://i.imgur.com/GVGfFoN.png"
          alt="잇"
        />
      </div>
    </div>
    <div class="nav-bar-router">
      <div class="temp-router">
        <div class="nav-bar-banner" @click="go('/')">
          <Chip :text="`Index`" />
        </div>
        <div class="nav-bar-banner" @click="go('authentication')">
          <Chip :text="`Auth`" />
        </div>
        <div class="nav-bar-banner" @click="go('mypage')">
          <Chip :text="`Mypage`" />
        </div>
        <BarButton />
      </div>
    </div>
  </div>
</template>

<script>
import "@/assets/style/css/navbarStyle.css";
import BarButton from "@/components/common/BarButton.vue";
import Chip from "@/components/common/Chip.vue";
export default {
  components: {
    BarButton,
    Chip
  },
  props: ["scrollPosition"],
  data() {
    return {};
  },
  methods: {
    go(link) {
      this.$router.push(link);
    }
  },
  watch: {
    scrollPosition() {
      if (this.scrollPosition <= 50) {
        var b1 = document.getElementById("bt1");
        var b2 = document.getElementById("bt2");
        var b3 = document.getElementById("bt3");
        var b4 = document.getElementById("bt4");
        // b2
        b2.style.webkitTransform =
          "translate(" +
          b1.offsetWidth / 2 +
          "px" +
          "," +
          b1.offsetHeight +
          "px)";

        // b3
        b3.style.webkitTransform =
          "translate(" + (5 + b1.offsetWidth) + "px" + "," + 0 + "px)";

        // // b4
        b4.style.webkitTransform =
          "translate(" +
          (b1.offsetWidth / 2 + b2.offsetWidth) +
          "px" +
          "," +
          b2.offsetHeight +
          "px)";

      } else {
        var bt1 = document.getElementById("bt1");
        var bt2 = document.getElementById("bt2");
        var bt3 = document.getElementById("bt3");
        var bt4 = document.getElementById("bt4");
        bt2.style.webkitTransform =
          "translate(" +
          bt1.offsetWidth+
          "px" +
          "," +
          0 +
          "px)";

        // b3
        bt3.style.webkitTransform =
          "translate(" + (bt2.offsetWidth + bt1.offsetWidth) + "px" + "," + 0 + "px)";

        // // b4
        bt4.style.webkitTransform =
          "translate(" +
          (bt1.offsetWidth + bt2.offsetWidth + bt3.offsetWidth) +
          "px" +
          "," +
          0 +
          "px)";
      }
    }
  }
};
</script>

<style>
.temp-router {
  display: flex;
}
</style>

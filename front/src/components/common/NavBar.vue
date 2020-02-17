<template>
  <div class="nav-bar animated fadeInDown delay-0.2s" id="navbar">
    <div class="nav-bar-mainbanner" id="navbarMB" @click="go('/')">
      <div class="bt1">
        GR
      </div>
      <div class="bt2">
        EAT
      </div>
      <div class="bt3">
        그래
      </div>
      <div class="bt4">
        잇
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
      if (this.scrollPosition <= 90) {
        var ab1 = document.getElementById("navbar");
        ab1.style.background = "transparent";

        var bt1 = document.getElementById("navbarMB").classList;
        bt1.remove("banner-text-transition");
      } else {
        var ab2 = document.getElementById("navbar");
        var idxB = document.getElementById("index-background").style.backgroundColor
        ab2.style.background = idxB;

        var bt2 = document.getElementById("navbarMB").classList;
        bt2.add("banner-text-transition");
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

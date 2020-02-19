<template>
  <div class="nav-bar animated fadeInDown delay-0.2s" id="navbar">
    <div class="nav-bar-banner-container" id="nbbc">
      <button class="nav-bar-mainbanner" @click="go('/')">
        <div v-if="routepath">
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
        <div v-else>
          <img
            class="static-banner"
            src="https://i.imgur.com/IKrLE43.png"
            alt="great"
          />
          <img
            class="static-banner2"
            src="https://i.imgur.com/UnePG9T.png"
            alt="great2"
          />
        </div>
      </button>
    </div>
    <div class="nav-bar-router" id="nav-router">
      <div class="temp-router">
        <button
          v-if="!loggedIn"
          class="nav-bar-banner"
          @click="go('authentication')"
        >
          <Chip :text="`Auth`" />
        </button>
        <button v-else class="nav-bar-banner" @click="go('mypage')">
          <Chip :text="`Mypage`" />
        </button>
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
  methods: {
    go(link) {
      this.$router.push(link);
    },
    change() {
      var b1 = document.getElementById("bt1");
      var b2 = document.getElementById("bt2");
      var b3 = document.getElementById("bt3");
      var b4 = document.getElementById("bt4");
      var ab1 = document.getElementById("navbar");
      var vabr = document.getElementById("nav-router");
      if (this.scrollPosition <= 50) {
        ab1.style.background = "transparent";
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

        // b4
        b4.style.webkitTransform =
          "translate(" +
          (b1.offsetWidth / 2 + b2.offsetWidth) +
          "px" +
          "," +
          b2.offsetHeight +
          "px)";
        vabr.style.webkitTransform = "translate(" + 0 + "px" + "," + 7 + "px)";
      } else {
        var idxB = document.getElementById("index-background").style
          .backgroundColor;
        ab1.style.background = idxB;
        vabr.style.webkitTransform = "translate(" + 0 + "px" + "," + -2 + "px)";

        // b2
        b2.style.webkitTransform =
          "translate(" + b1.offsetWidth + "px" + "," + 0 + "px)";
        // b3
        b3.style.webkitTransform =
          "translate(" +
          (b2.offsetWidth + b1.offsetWidth) +
          "px" +
          "," +
          0 +
          "px)";

        // b4
        b4.style.webkitTransform =
          "translate(" +
          (b1.offsetWidth + b2.offsetWidth + b3.offsetWidth) +
          "px" +
          "," +
          0 +
          "px)";
      }
    }
  },
  mounted() {
    this.change();
  },
  computed: {
    routepath() {
      if (this.$route.name === "index") {
        return true;
      } else {
        return false;
      }
    },
    loggedIn() {
      if (sessionStorage.getItem("token")){
        return true
      } else{
        return false
      }
    }
  },
  watch: {
    scrollPosition() {
      this.change();
    }
  }
};
</script>

<style>
.temp-router {
  display: flex;
}
</style>

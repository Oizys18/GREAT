<template>
  <div>
    <div class="about-padding" id="about-padding"></div>
    <div class="about-container" id="about-container">
      <div class="about-content">

      </div>
      <div class="about-footer">
        <span>
          TEAM BBBBA 🔥 : : SSAFY 2020.01 ~ 02
        </span>
      </div>
      
    </div>
  </div>
</template>

<script>
export default {
  name: "about",
  props: ["page"],
  data() {
    return {
      scrollPosition: null
    };
  },
  computed: {},
  methods: {
    changeBG() {
      var aboutPD = document.getElementById("about-padding");
      var idxB = document.getElementById("index-background").style
        .backgroundColor;
      aboutPD.style.background = "linear-gradient(180deg," + idxB + ", white)";
    }
  },
  watch: {
    page() {
      this.changeBG();
    }
  }
};
</script>

<style>
.about-padding {
  position: absolute;
  left: 0;
  top: 100vh;
  width: 100vw;
  height: 50vh;
  background: linear-gradient(180deg, #f9d423, rgb(238, 238, 238));
  -webkit-transition: all 0.6s ease;
  transition: all 0.6s ease;
}
.about-container {
  position: absolute;
  left: 0;
  top: 150vh;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(180deg, rgb(238, 238, 238),rgb(251, 243, 243));
  display: flex;
  justify-content: center;
  align-content: center;
}
.about-footer{
  display: flex;
  padding-right:10px;
  justify-content: flex-end;
  width:100vw;
  position: absolute;
  bottom:0;

}
</style>

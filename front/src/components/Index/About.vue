<template>
  <div>
    <div class="about-container" id="about-container">
      <div id="about-banner" class="animated">
        팀원소개
      </div>
      <span id="about-divider" class="animated"></span>
      <div class="about-content">
        <AboutCard :idx="0" />
        <AboutCard :idx="1" />
        <AboutCard :idx="2" />
        <AboutCard :idx="3" />
        <AboutCard :idx="4" />
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
import AboutCard from "@/components/Index/AboutCard.vue";
export default {
  name: "about",
  props: ["page"],
  components: {
    AboutCard
  },
  data() {
    return {
      scrollPosition: null
    };
  },
  methods: {
    updateScroll() {
      this.scrollPosition = window.scrollY;
    }
  },
  mounted() {
    window.addEventListener("scroll", this.updateScroll);
  },
  watch: {
    scrollPosition() {
      var ab = document.getElementById("about-banner");
      var ad = document.getElementById("about-divider");
      if (400 < this.scrollPosition) {
        ab.style.display = "";
        ad.style.display = "";
        ab.classList.add("fadeInLeft");
        ad.classList.add("fadeInRight");
      } else if (this.scrollPosition < 120) {
        ab.style.display = "none";
        ad.style.display = "none";
        ab.classList.remove("fadeInLeft");
        ad.classList.remove("fadeInRight");
      }
    }
  }
};
</script>

<style>
#about-banner {
  position: absolute;
  font-family: "Black Han Sans", sans-serif;
  top: 7vh;
  left: 0.5vw;
  font-size: 8vw;
}
#about-divider {
  position: absolute;
  top: 13.5vh;
  left: 30%;
  /* left:0.5vw; */
  height: 3px;
  width: 70%;
  background-color: black;
}

.about-container {
  position: absolute;
  top: 100vh;
  width: 100vw;
  /* height: 50vh; */
  height: 100vh;
  /* background: linear-gradient(180deg, rgb(238, 238, 238), rgb(184, 184, 184)); */
  background: ghostwhite;
  display: flex;
  justify-content: center;
  align-content: center;
}
.about-footer {
  position: absolute;
  top: 100vh;
  display: flex;
  font-size: 1rem;
  justify-content: flex-end;
  padding-right: 2vw;
  bottom: 0;
  background: transparent;
  color: black;
  width: 100vw;
  height: 1.5rem;
}
.about-content {
  position: absolute;
  display: flex;
  max-width: 95vw;
  height: 100vh;
  padding-top: 20vh;
  justify-content: space-around;
  align-items: center;
}

@media (max-width: 500px) {
  #about-banner {
    top: 11vh;
  }
  .about-footer{
    top:185vh;
  }
  .about-container{
    height:190vh;
  }
  .about-content {
    padding-top:100vh;
    flex-direction: column;
    justify-content: center;
  }
  .about-image{
    height:100%;
    width:40%;
  }
  .about-card{
    display: flex;
    justify-content: center;
    margin-bottom:3vh;
    text-align:center;
  }
  .about-profile{
    margin-bottom:1vh;
  }
}
</style>

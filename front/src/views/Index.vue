<template>
  <div>
    <span class="index-banner">
      GrEAT
    </span>
    <div>
      hello
    </div>
    <div class="carousel-container">
      <div class="index-curtain"></div>
      <v-carousel cycle height="100%" hide-delimiters show-arrows-on-hover>
        <v-carousel-item v-for="(slide, i) in slides" :key="i">
          <v-sheet color="transparent" height="100%">
            <div class="carousel-text">
              <div style="color:black" class="hello">
                slide Onesssssssssssssssssssssssssssssssssssssssssssss
              </div>
              <div style="color:red" class="slideIMG">
                sssssssssssssssssssssssssssssssssssssssssssssssssss
              </div>
            </div>
          </v-sheet>
        </v-carousel-item>
      </v-carousel>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import "@/assets/style/css/animated.css";
export default {
  name: "Index",
  components: {},
  data() {
    return {
      address: "",
      category: "",
      addressList: [],
      colors: ["red lighten-1", "warning", "pink darken-2"],
      slides: ["First", "Second", "Third"]
    };
  },
  methods: {
    getXY() {
      axios
        .get("https://dapi.kakao.com/v2/local/search/address.json", {
          params: {
            query: this.address
          },
          headers: {
            Authorization: "KakaoAK f8d38a34b065785c71e6beed1528657f"
          }
        })
        .then(res => {
          this.addressList = res.data.documents;
          // console.log(res.data.documents[0].y);
          // console.log(res.data.documents[0].x);
        });
    }
  },
  watch: {
    address() {
      // console.log(this.address);
    }
  }
};
</script>

<style>
.index-banner {
  z-index: 4;
  font-family: "Lobster", cursive;
  position: fixed;
  top: 32vh;
  left: 50vw;
  text-shadow: 3px 10px 5px rgba(0, 0, 0, 0.541);
  font-size: 23vh;
  color: rgba(255, 0, 0, 0.787);
}
.index-curtain {
  z-index: 1;
  position: fixed;
  left: 0;
  top: 0;
  background-color: white;
  width: 63vw;
  height: 100vh;
}
.carousel-container {
  z-index: 3;
  position: fixed;
  width: 100vw;
  height: 100vh;
}
.carousel-text {
  display: flex;
  justify-content: space-between;
  font-size: 50px;
}
.slideIMG {
  width: 76vh;
  height: 100vh;
  background-position: center;
  background-image: url("https://www.mcdonalds.pt/media/4283/sliderheading_backgroundimage_cupoes2020_1vaga_1920x1080.jpg?anchor=center&mode=crop&width=1920&height=1080&rnd=132246887860000000");
}
</style>

<template>
  <div class="carousel-container">
    <!-- mobile carousel -->
    <div class="small-screen-carousel" style="font-size:100px;">
      This is mobile carousel
    </div>

    <div class="big-screen-carousel">
      <span id="floatIMG" class="floating-IMG">
        <span class="floating-text">
          GrEAT
        </span>
      </span>
      <div class="index-curtain"></div>
      <div class="back-carousel">
        <v-carousel
          v-model="model"
          height="100vh"
          hide-delimiter-background
          show-arrows-on-hover
        >
          <v-carousel-item v-for="color in colors" :key="color">
            <v-sheet
              class="back-carousel-sheet"
              :color="color"
              height="100%"
              tile
            >
            </v-sheet>
          </v-carousel-item>
        </v-carousel>
      </div>
      <div class="front-wrapper-container">
        <div>
          <div :key="this.model">
            <div tile>
              <div class="front-wrapper-title animated fadeInDown delay:0.2s">
                {{ this.title[this.model] }}
              </div>
              <div class="front-wrapper-content animated fadeInDown delay:0.3s">
                {{ this.content[this.model] }}<br/>
              </div>
            </div>
          </div>
        </div>
      </div>
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
      colors: ["warning", "pink darken-2", "red lighten-1"],
      model: 0,
      title: [
        "🎉GrEAT과 함께 메뉴를 정해봐요🍔",
        "🐱‍💻GrEAT is a good service!🐱‍🏍",
        "😥Please, use GrEAT🐱‍🚀"
      ],
      content: {
        0:"내 주변에서 갈 만한 식당 정하기",
        1:`1.주소를 입력! 2.원하는 카테고리 선택! 3.START`,
        2:"제발 사용해주세요ㅠ"
      },
      // contentA: `1.주소를 입력! 2.원하는 카테고리 선택 \\n 3.START`,
      contentC: `3.START`,
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
    },
    mouseIsMoving(e) {
      var hamX = document.getElementById("floatIMG").offsetLeft;
      var hamY = document.getElementById("floatIMG").offsetTop;
      var x = (hamX - e.pageX) * 0.1;
      var y = (hamY - e.pageY) * 0.1;
      console.log(hamX, hamY);
      document.getElementById("floatIMG").style.webkitTransform =
        "translate(" + x + "px" + "," + y + "px)";
    }
  },

  mounted() {
    window.addEventListener("mousemove", this.mouseIsMoving);
  }, //mounted
  watch: {
    address() {
      // console.log(this.address);
    }
  }
};
</script>

<style>
.floating-IMG {
  background-image: url("https://i2.wp.com/freepngimages.com/wp-content/uploads/2016/11/bacon-burger.png?fit=895%2C895");
  background-position: center;
  background-size: contain;
  z-index: 3;
  position: fixed;
  top: 32vh;
  left: 55vw;
  height: 50vh;
  width: 40vw;
  /* -webkit-transform:rotate(10deg); */
  /* -webkit-transform:translate() */
}
.floating-text {
  /* text */
  z-index: 3;
  position: relative;
  display: flex;
  top: 10vh;
  justify-content: center;
  align-content: center;
  font-size: 13vh;
  font-family: "Lobster", cursive;
  text-shadow: 3px 10px 5px rgba(0, 0, 0, 0.541);
  color: rgba(255, 0, 0, 0.856);
}

.index-curtain {
  z-index: 2;
  position: fixed;
  left: 5vw;
  top: 12vh;
  background-color: white;
  width: 67vw;
  height: 80vh;
  border-radius: 15px;
  box-shadow: 0 0 20px darkslategray;
}
.back-carousel {
  z-index: 1;
  position: relative;
}
.front-wrapper-title {
  font-family: "Noto Sans KR", sans-serif;
  position: fixed;
  z-index: 4;
  left: 10vw;
  top: 20vh;
  font-size: 3vw;
  color: black;
  font-weight: bold;
}
.front-wrapper-content {
  font-family: "Noto Sans KR", sans-serif;
  position: fixed;
  z-index: 4;
  left: 14vw;
  top: 30vh;
  font-size: 2vw;
  color: black;
  font-weight: bold;
}

@media (min-width: 800px) {
  .small-screen-carousel {
    display: none;
  }
}
@media (max-width: 800px) {
  .big-screen-carousel {
    display: none;
  }
  .small-screen-carousel {
  }
}
</style>

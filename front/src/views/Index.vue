<template>
  <div class="carousel-container">
    <div class="small-screen-carousel" style="font-size:100px;">
      This is mobile carousel
    </div>

    <span id="floatIMG" class="floating-IMG">
      <span class="floating-text">
        GrEAT
      </span>
    </span>
    <div class="big-screen-carousel">
      <div class="index-card">
        <div class="index-card-container">
          <div>
            <div :key="this.model">
              <div tile>
                <div class="index-card-title animated fadeInDown delay:0.2s">
                  {{ this.title[this.model] }}
                </div>
                <div class="index-card-content animated fadeInDown delay:0.3s">
                  {{ this.content[this.model] }}<br />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="index-carousel">
        <v-carousel
          v-model="model"
          height="100vh"
          hide-delimiter-background
          show-arrows-on-hover
        >
          <v-carousel-item v-for="color in IndexColors" :key="color">
            <v-sheet
              class="index-carousel-sheet"
              :color="color"
              height="100%"
              tile
            >
            </v-sheet>
          </v-carousel-item>
        </v-carousel>
      </div>
    </div>
  </div>
</template>

<script>
import "@/assets/style/css/indexStyle.css";
import "@/assets/style/css/animated.css";
export default {
  name: "Index",
  components: {},
  data() {
    return {
      address: "",
      category: "",
      addressList: [],
      IndexColors: ["warning", "pink darken-2", "red lighten-1"],
      model: 0,
      title: [
        "🎉GrEAT과 함께 메뉴를 정해봐요",
        "🐱‍💻언제 GrEAT을 써야하죠?🐱‍🏍",
        "😥GrEAT 해보고 싶어요!🐱‍🚀"
      ],
      content: {
        0: "내 주변에서 갈 만한 식당 정하기",
        1: `1.주소를 입력! 2.원하는 카테고리 선택! 3.START`,
        2: "제발 사용해주세요ㅠ"
      }
    };
  },
  methods: {
    mouseIsMoving(e) {
      var hamX = document.getElementById("floatIMG").offsetLeft;
      var hamY = document.getElementById("floatIMG").offsetTop;
      var x = (hamX - e.pageX) * 0.1;
      var y = (hamY - e.pageY) * 0.1;
      document.getElementById("floatIMG").style.webkitTransform =
        "translate(" + x + "px" + "," + y + "px)";
    }
  },
  mounted() {
    window.addEventListener("mousemove", this.mouseIsMoving);
  }
};
</script>

<style>
@media (min-width: 600px) {
  .small-screen-carousel {
    display: none;
  }
}
@media (max-width: 600px) {
  .big-screen-carousel {
    display: none;
  }
  .small-screen-carousel {
  }
}
</style>

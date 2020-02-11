<template>
  <div class="carousel-container">
    <span id="FlyingBurger" class="floating-container">
      <span class="floating-text">
        GrEAT
      </span>
    </span>
    <div class="big-screen-carousel">
      <div class="index-carousel">
        <v-carousel
          v-model="model"
          height="100vh"
          hide-delimiter-background
          show-arrows-on-hover
        >
          <div class="index-card">
            <div class="index-card-container">
              <div :key="this.model">
                <div tile>
                  <div class="index-card-title animated fadeInDown delay:0.2s">
                    {{ this.title[this.model] }}
                  </div>
                  <div
                    class="index-card-content animated fadeInDown delay:0.1s"
                  >
                    <span v-for="cardText in this.content[this.model]" :key="cardText">
                      {{ cardText }}<br />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
      IndexColors: ["warning", "pink darken-2", "red lighten-1"],
      model: 0,
      title: [
        "🎉GrEAT과 함께 메뉴를 정해봐요",
        "🐱‍💻언제 GrEAT을 써야하죠?🐱‍🏍",
        "😥GrEAT 해보고 싶어요!🐱‍🚀"
      ],
      content: {
        0: ["", "🥘대충 정해도 근사한 식사!", "🍰다양한 선택지를 한 눈에!"],
        1: [
          "",
          "🤦‍♂️너어어무 메뉴결정이 귀찮을 때!",
          "🦅빠르게 메뉴를 결정해야 할 때!",
          "🕵️‍♀️처음 가본 곳의 맛집을 찾고싶을 때!"
        ],
        2: [
          "🤷‍♂️전혀 어렵지 않아요!!🤷‍♀️",
          "",
          "1.주소를 입력!",
          "2.원하는 카테고리 선택!",
          "3.START"
        ]
      }
    };
  },
  methods: {
    mouseIsMoving(e) {
      if (screen.width >= 800) {
        var hamX = document.getElementById("FlyingBurger").offsetLeft;
        var hamY = document.getElementById("FlyingBurger").offsetTop;
        var x = (hamX - e.pageX) * 0.1;
        var y = (hamY - e.pageY) * 0.1;
        document.getElementById("FlyingBurger").style.webkitTransform =
          "translate(" + x + "px" + "," + y + "px)";
      }
    }
  },
  mounted() {
    window.addEventListener("mousemove", this.mouseIsMoving);
  }
};
</script>

<style></style>

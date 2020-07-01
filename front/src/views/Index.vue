<template>
  <div class="index-container">
    <div class="carousel-container">
      <span id="FlyingBurger" class="floating-container ">
        <span class="floating-text animated pulse slower infinite">
          GrEAT
        </span>
      </span>
      <div class="index-carousel-indicator">
        <button>
          <img
            @click="pagePrev"
            class="index-next"
            src="@/assets/img/arrow-icon.png"
          />
        </button>
        <CarouselIndicator :pageIDX="this.page" />
        <button>
          <img
            @click="pageNext"
            class="index-prev"
            src="@/assets/img/arrow-icon.png"
          />
        </button>
      </div>
      <div
        class="index-background transition:0.15s"
        id="index-background"
        :style="{ backgroundImage: this.backgroundIMG[this.page] }"
      ></div>
      <div class="big-screen-carousel" :key="this.page">
        <div class="index-card">
          <div class="index-card-title animated fadeInDown delay:0.15s">
            {{ this.title[this.page] }}
          </div>
          <div class="index-card-content animated fadeInDown delay:0.05s">
            <span
              v-for="(cardText, id) in this.content[this.page]"
              :key="`${cardText}-${id}`"
            >
              {{ cardText }}<br />
            </span>
            <div class="index-sample-box-container">
              <span
                v-show="page === 0"
                class="index-sample-box animated tada"
                v-for="(item, idx) in categories"
                :key="`${item}-${idx}`"
              >
                {{ item.name }}
              </span>
            </div>
            <span v-show="page === 2">
              <BarButton />
            </span>
          </div>
        </div>
      </div>
    </div>
    <About :page="page" />
  </div>
</template>
<script>
import "@/assets/style/css/indexStyle.css";
import "@/assets/style/css/animated.css";
import BarButton from "@/components/common/BarButton.vue";
import About from "@/components/Index/About.vue";
import CarouselIndicator from "@/components/common/CarouselIndicator.vue";
export default {
  name: "Index",
  components: {
    CarouselIndicator,
    BarButton,
    About
  },
  data() {
    return {
      backgroundIMG: [
        "url(https://i.imgur.com/ZftYIKh.jpg)",
        "url(https://i.imgur.com/CHTl61z.jpg)",
        "url(https://i.imgur.com/VpqrLcy.jpg)"
      ],
      IndexColors: ["#F9D423", "#FC913A", "#FF4E50"],
      page: 0,
      title: [
        "🎉GrEAT과 함께 메뉴를 정해봐요",
        "🐱‍💻언제 GrEAT을 써야하죠?🐱‍🏍",
        "😆GrEAT 해보고 싶어요!🐱‍🚀"
      ],
      content: {
        0: [
          "",
          "🍱대충 정해도 근사한 식사!",
          "😮8개의 카테고리 분류를 한 눈에!"
        ],
        1: [
          "",
          "🤦‍♂️메뉴를 결정하지 못해 고민일 때!",
          "🦅빠르게 메뉴를 결정해야 할 때!",
          "🕵️‍♀️처음 가본 곳의 맛집을 찾고싶을 때!"
        ],
        2: [
          "",
          "1. 주소를 입력!",
          "2. 9 X 9 그리드로 맛집 고르기!",
          "👇Great한 맛집 고르러 가기",
          ""
        ]
      }
    };
  },
  methods: {
    changePageWithKey(e) {
      console.log(e.target.value);
    },
    mouseIsMoving(e) {
      if (screen.width >= 800 && this.$router.app.$route.path === "/") {
        var hamX = document.getElementById("FlyingBurger").offsetLeft;
        var hamY = document.getElementById("FlyingBurger").offsetTop;
        var x = (hamX - e.pageX) * 0.1;
        var y = (hamY - e.pageY) * 0.1;
        document.getElementById("FlyingBurger").style.webkitTransform =
          "translate(" + x + "px" + "," + y + "px)";
      }
    },
    pagePrev() {
      this.page -= 1;
      if (this.page == -1) {
        this.page = 2;
      }
    },
    pageNext() {
      this.page += 1;
      if (this.page == 3) {
        this.page = 0;
      }
    },
    lock(e) {
      if (screen.width >= 800) {
        var x = e.x;
        this.startX = x;
      } else {
        var mx = e.x;
        this.startX = mx;
      }
    },
    move(e) {
      if (screen.width >= 800) {
        var x = e.x;
        if (this.startX - x < 0) {
          this.page -= 1;
          if (this.page == -1) {
            this.page = 2;
          }
        } else if (this.startX - x > 0) {
          this.page += 1;
          if (this.page == 3) {
            this.page = 0;
          }
        }
      } else {
        var mx = e.x;
        if (this.startX - mx < 0) {
          this.page -= 1;
          if (this.page == -1) {
            this.page = 2;
          }
        } else if (this.startX - mx > 0) {
          this.page += 1;
          if (this.page == 3) {
            this.page = 0;
          }
        }
      }
    }
  },
  computed: {
    categories() {
      return this.$store.state["categories"];
    }
  },
  mounted() {
    window.addEventListener("mousemove", this.mouseIsMoving);
    // touch start
    window.addEventListener("touchstart", this.lock);
    window.addEventListener("mousedown", this.lock);
    // touch end
    window.addEventListener("touchend", this.move);
    window.addEventListener("mouseup", this.move);
  }
};
</script>
<style></style>

<template>
  <div :key="MFCkey">
    <div v-if="showGrid === -1" class="m-category-grid">
      <div
        v-for="(food, idx) in foodlist1"
        :key="`${food}-${idx}`"
        class="m-center-box"
      >
        <button @click="changeview(food)">
          <img class="m-category-image" :src="category1Img[idx]" />
        </button>
      </div>

      <!-- 지도 -->
      <div class="m-center-box">
        <button @click="showMap()">
          <img
            src="https://i.imgur.com/ChXe0Aa.png"
            alt="center-map"
            id="m-map-icon"
          />
        </button>
      </div>

      <!-- 4~7 -->
      <div
        v-for="(food, idx) in foodlist2"
        :key="`${food}-${idx}`"
        class="m-center-box"
      >
        <button @click="changeview(food)">
          <img class="m-category-image" :src="category2Img[idx]" />
        </button>
      </div>
    </div>

    <div v-else>
      <MobileGridItem :num="store" :bookmark="bookmark" />
    </div>
    <div class="mobile-footer">
      <div class="footer-container">
        <button class="footer-button" @click="redirectBack">
          Back
        </button>
        <button class="footer-button" @click="redirectMain">
          Main
        </button>
        <button class="footer-button" @click="redirectMypage">
          Mypage
        </button>
      </div>
    </div>

    <!-- map modal -->
    <v-dialog v-model="showModal">
      <div class="m-map-modal">
        <MobileGridMap v-on:newsearch="reset()"/>
      </div>
    </v-dialog>
  </div>
</template>
<script
  type="text/javascript"
  src="//dapi.kakao.com/v2/maps/sdk.js?appkey=f8d38a34b065785c71e6beed1528657f"
></script>
<script>
import axios from "axios";
import MobileGridItem from "@/components/Grid/MobileGrid/MobileGridItem.vue";
import MobileGridMap from "@/components/Grid/MobileGrid/MobileGridMap.vue";
import "@/assets/style/css/gridStyle.css";
export default {
  name: "MobileFoodCategory",
  components: {
    MobileGridItem,
    MobileGridMap
  },
  props: ["num", "bookmark"],
  data() {
    return {
      MFCkey:0,
      showModal: 0,
      foodlist1: [0, 1, 2, 3],
      foodlist2: [4, 5, 6, 7],
      category1Img: [
        "https://i.imgur.com/XIZOsMo.png",
        "https://i.imgur.com/iBTK8eT.png",
        "https://i.imgur.com/w1JOWBH.png",
        "https://i.imgur.com/gmDYKFw.png"
      ],
      category2Img: [
        "https://i.imgur.com/ZBrgtCR.png",
        "https://i.imgur.com/AVUnO3w.png",
        "https://i.imgur.com/IF2chC8.png",
        "https://i.imgur.com/6V4QzGn.png"
      ],
      showGrid: -1
    };
  },
  methods: {
    showMap() {
      this.showModal = 1;
    },
    changeview(idx) {
      this.showGrid = idx;
    },
    redirectBack() {
      this.showGrid = -1;
    },
    redirectMain() {
      this.$router.push("/");
    },
    redirectMypage() {
      this.$router.push("mypage");
    },
    go(link) {
      this.$router.push(link);
    },
    reset(){
      this.MFCkey += 1
      this.showModal = 0
      this.$forceUpdate()
    }
  },
  computed: {
    store() {
      return this.showGrid;
    },
    
  }
};
</script>

<style>
.mobile-footer {
  position: fixed;
  bottom: 0;
  width: 90vw;
}
.footer-container {
  display: flex;
  justify-content: space-around;
}
.footer-button {
  margin: 0 0 2vh 0;
  padding: 2vh 6vw 2vh 6vw;
  border: 2px solid transparent;
  border-radius: 10px;
  font-size: 1.5rem;
  font-weight: bold;
  background-color: rgb(233, 233, 233);
  box-shadow: 0px 5px 5px rgb(255, 192, 76);
}
#m-map-icon {
  width: 29vw;
  height: 29vw;
}
.m-map-modal {
  width: 80vw;
  height: 75vh;
  background: ghostwhite;
  border-radius: 15px;
}
.m-main-grid-map {
  height: 55vh;
  width: 80vw;
  margin: 0;
  border-radius: 20px;
  border: 3px solid transparent;
  box-shadow: 0 2px 2px 2px rgba(51, 51, 51, 0.534);
  display: flex;
  justify-content: center;
  color: black;
  font-weight: bold;
  background-color: transparent;
}
#m-main-grid-map-research {
  position: relative;
  border-radius: 20px;
  bottom: 30vh;
  width: 30vh;
  height: 30vh;
  background-color: black;
  z-index: 20;
}
.m-search-input {
  display: flex;
  justify-content: center;
  align-items: center;
}
#m-map-input {
  position: relative;
  top: 8vh;
  width: 40vw;
  height: 5vh;
  background-color: white;
  border: 1px solid black;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  text-align: center;
}
#m-map-go {
  position: relative;
  top: 8vh;
  margin: 0 2vw 0 2vw;
  padding: 1vh 5vw 1vh 5vw;
  border: 1px solid black;
  box-shadow: 0 2px 3px 0 black;
  border-radius: 5px;
  background-color: blue;
  color: white;
}
</style>

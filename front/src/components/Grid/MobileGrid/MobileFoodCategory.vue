<template>
  <div>
    <div v-if="showGrid===-1" class="m-category-grid">
      <div
        v-for="(food, idx) in foodlist1"
        :key="`${food}-${idx}`"
        class="m-center-box"
      >
        <button @click="changeview(food)">
          <img class="m-category-image" :src="category1Img[idx]" />
        </button>
      </div>
      <div class="m-center-box">Location</div>
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
      <button @click="go">category</button>
      <MobileGridItem :num="store" :bookmark="bookmark"/>
    </div>
  </div>
</template>

<script>
import MobileGridItem from "@/components/Grid/MobileGrid/MobileGridItem.vue"
import "@/assets/style/css/gridStyle.css";
export default {
  name: "MobileFoodCategory",
  components:{
    MobileGridItem
  },
  props: ["num", "bookmark"],
  data() {
    return {
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
      showGrid:-1,
      
    };
  },
  methods: {
    changeview(idx) {
      console.log("hello");
      console.log(idx);
      this.showGrid = idx
      // this.$store.state.viewcategory = this.key;
      // this.showGrid = 1
    },
    go(){
      this.showGrid = -1
    }
  },
  computed:{
    store(){
      return this.showGrid
    }
  }
};
</script>

<style></style>

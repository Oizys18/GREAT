<template>
  <div class="m-small-grid">
    <template v-for="(idx, i) in indexList.slice(0, 4)">
      <button
        class="m-small-box"
        :draggable="draggable"
        @mouseover="over(i)"
        @mouseleave="out(i)"
        v-on:dragend="changeIndex(i)"
        @click="storeInfo(idx)"
        :key="idx"
      >
        <GridItem :name="[itemName[idx].name]" />
        <StarRating v-if="mouseOn[i]" :rating="itemName[idx].rating" />
      </button>
    </template>
    <div class="m-small-category">{{ categoryName }}</div>
    <template v-for="(idx, i) in indexList.slice(4, 8)">
      <button
        class="m-small-box"
        :draggable="draggable"
        @mouseenter="over(i + 4)"
        @mouseleave="out(i + 4)"
        v-on:dragend="changeIndex(i + 4)"
        @click="storeInfo(idx)"
        :key="idx"
      >
        <GridItem :name="[itemName[idx].name]" />
        <StarRating v-if="mouseOn[i + 4]" :rating="itemName[idx].rating" />
      </button>
    </template>
  </div>
</template>

<script>
import "@/assets/style/css/gridStyle.css";
import GridItem from "@/components/Grid/GridItem.vue";
import StarRating from "@/components/common/StarRating.vue";
import GridApi from "@/apis/GridApi.js";
export default {
  name: "MainFoodGrid",
  components: {
    GridItem,
    StarRating
  },
  data() {
    return {
      mouseOn: [false, false, false, false, false, false, false, false]
    };
  },
  props: ["num", "bookmark"],
  methods: {
    changeIndex(i) {
      var commitName = this.categoryName + "List";
      this.$store.commit(commitName, i);
      this.mouseOn.splice(i, 1, false);
    },
    over(i) {
      this.mouseOn.splice(i, 1, true);
    },
    out(i) {
      this.mouseOn.splice(i, 1, false);
    },
    storeInfo(idx) {
      GridApi.requestStoreInfo(this.itemName[idx].id, response => {
        this.$store.state.storeInfo = response;
        // open sidebar
        var sidebar = document.getElementById("sidebar-1");
        sidebar.classList.remove("bounceOutLeft");
        sidebar.classList.add("bounceInLeft");
      });

      GridApi.requestReviewInfo(this.itemName[idx].id, response => {
        this.$store.state.reviewInfo = response
      })
    }
  },
  computed: {
    categoryName() {
      return this.$store.state.categories[this.num].name;
    },
    indexList() {
      var listName = this.categoryName + "index";
      return this.$store.state[listName];
    },
    itemName() {
      return this.$store.state[this.categoryName];
    },
    draggable() {
      if(this.bookmark == 0) return true
      else return false
    }
  }
};
</script>

<style></style>

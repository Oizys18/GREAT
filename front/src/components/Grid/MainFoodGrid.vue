<template>
  <div class="small-grid">
    <button class="small-box"><GridItem :name="[this.itemName[0]]" /></button>
    <button class="small-box"><GridItem :name="[this.itemName[1]]" /></button>
    <button class="small-box"><GridItem :name="[this.itemName[2]]" /></button>
    <button class="small-box"><GridItem :name="[this.itemName[3]]" /></button>
    <div class="small-category">{{ categoryName }}</div>
    <button class="small-box"><GridItem :name="[this.itemName[4]]" /></button>
    <button class="small-box"><GridItem :name="[this.itemName[5]]" /></button>
    <button class="small-box"><GridItem :name="[this.itemName[6]]" /></button>
    <button class="small-box"><GridItem :name="[this.itemName[7]]" /></button>
  </div>
</template>

<script>
import "@/assets/style/css/gridStyle.css";
import GridItem from "./GridItem.vue";
export default {
  name: "MainFoodGrid",
  components: {
    GridItem
  },
  data() {
    return {};
  },
  props: ["num"],
  methods: {
    hi() {
      console.log("상세정보 사이드바!!");
    }
  },
  computed: {
    categoryName() {
      return this.$store.state.categories[this.num];
    },
    itemName() {
      return this.$store.state[this.categoryName];
    }
  }
};
</script>

<style></style>

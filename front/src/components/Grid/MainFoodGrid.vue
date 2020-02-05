<template>
  <div class="small-grid">
    <template v-for="idx in indexList.slice(0,4)">
      <button class="small-box" :key="idx"><GridItem :name="[itemName[idx].name]" /></button>
    </template>
    <div class="small-category">{{ categoryName }}</div>
    <template v-for="idx in indexList.slice(4,8)">
      <button class="small-box" :key="idx"><GridItem :name="[itemName[idx].name]" /></button>
    </template>
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
    return {
      indexList: [0,1,2,3,4,5,6,7]
    };
  },
  props: ["num"],
  methods: {
    hi() {
      console.log("상세정보 사이드바!!");
    }
  },
  computed: {
    categoryName() {
      return this.$store.state.categories[this.num].name;
    },
    itemName() {
      return this.$store.state[this.categoryName];
    }
  }
};
</script>

<style>

</style>

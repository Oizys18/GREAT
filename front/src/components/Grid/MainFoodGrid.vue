<template>
  <div class="small-grid">
    <template v-for="(idx, i) in indexList.slice(0,4)">
      <button 
       class="small-box"
       draggable="true" 
       @mouseover="over(i)"
       @mouseleave="out(i)" 
       v-on:dragend="changeIndex(i)" 
       :key="idx">
      <GridItem :name="[itemName[idx].name]" />
      <StarRating v-if="mouseOn[i]" :rating="itemName[idx].rating" />
      </button>
    </template>
    <div class="small-category">{{ categoryName }}</div>
    <template v-for="(idx, i) in indexList.slice(4,8)">
      <button 
        class="small-box"
        draggable="true"
        @mouseenter="over(i+4)"
        @mouseleave="out(i+4)" 
        :key="idx"
        v-on:dragend="changeIndex(i+4)" >
      <GridItem :name="[itemName[idx].name]" />
      <StarRating 
        v-if="mouseOn[i+4]" 
        :rating="itemName[idx].rating" />
      </button>
    </template>
  </div>
</template>

<script>
import "@/assets/style/css/gridStyle.css"
import GridItem from "./GridItem.vue"
import StarRating from '../common/StarRating.vue'
export default {
  name: "MainFoodGrid",
  components: {
    GridItem,
    StarRating
  },
  data() {
    return {
      mouseOn: [
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false
      ]
    }
  },
  props: ["num"],
  methods: {
    hi() {
      console.log("상세정보 사이드바!!");
    },
    changeIndex(i) {
      var commitName = this.categoryName + 'List'
      this.$store.commit(commitName, i)
      this.mouseOn.splice(i,1,false)
    },
    over(i) {
      this.mouseOn.splice(i,1,true)
    },
    out(i) {
      this.mouseOn.splice(i,1,false)
    }
  },
  computed: {
    categoryName() {
      return this.$store.state.categories[this.num].name;
    },
    indexList() {
      var listName = this.categoryName + 'index'
      return this.$store.state[listName];
    },
    itemName() {
      return this.$store.state[this.categoryName];
    }
  }
};
</script>

<style>

</style>

<template>
  <div class="indicator-container">
    <span
      class="indicator-item"
      v-for="(item, idx) in items"
      :key="`${item} - ${idx}`"
      :style="{ backgroundColor: bgc[pageIDX][item] }"
    ></span>
  </div>
</template>

<script>
import "@/assets/style/css/indicatorStyle.css";
export default {
  name: "CarouselIndicator",
  props: ["pageIDX"],
  data() {
    return {
      items: [0, 1, 2],
      bgc: [
        ["grey", "white", "white"],
        ["white", "grey", "white"],
        ["white", "white", "grey"]
      ]
    };
  },
  methods: {}
};
</script>

<style></style>

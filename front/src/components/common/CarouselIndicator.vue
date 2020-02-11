<template>
  <div>
    <div class="indicator-container">
      <span 
        class="indicator-item"
        v-for="(item, idx) in items"
        :key="`${item} - ${idx}`"
        :style="{ backgroundColor: bgc[pageIDX][item] }"
      ></span>
    </div>
  </div>
</template>

<script>
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
  methods:{} 
};
</script>

<style>
.indicator-container {
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 5;
  box-shadow: 3px, 3px, 3px, black;
}
.indicator-item {
  z-index: 5;
  background-color: white;
  width: 15px;
  height: 15px;
  margin: 15px;
  border-radius: 15px;
}
</style>

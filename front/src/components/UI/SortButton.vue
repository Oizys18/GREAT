<template>
  <ul class="sort-elements">
    <li>
      <a href="#" @click="click('rating')">
        <span class="icon-cog"></span>
      </a>
    </li>
    <li>
      <a href="#" @click="click('random')">
        <span class="icon-cw"></span>
      </a>
    </li>
    <li>
      <a href="#" @click="click('distance')">
        <span class="icon-location"></span>
      </a>
    </li>
  </ul>
</template>

<script>
import "@/assets/style/css/sortButton.css";
import GridApi from '../../apis/GridApi.js'
export default {
  name: "SortButton",
  methods: {
    click(type) {
      var x = this.$store.state.locationX;
      var y = this.$store.state.locationY;
      var categories = this.$store.state.categories;
      for (var i = 0; i < categories.length; i++) {
        var categoryName = categories[i].name;
        var categoryId = categories[i].id;
        this.apiCall(categoryId, categoryName, x, y, type);
      }
    },
    apiCall(categoryId, categoryName, x, y, type) {
      var data = {
        locationX: x,
        locationY: y,
        category: categoryId
      };

      switch (type) {
        case "rating":
          GridApi.requestGridStoresByRating(data, response => {
            for (var i = response.length; i < 8; i++) {
              response.push({ name: "" });
            }
            this.$store.commit(categoryName, response);
          });
          break;
        case "random":
          GridApi.requestGridStoresByRandom(data, response => {
            for (var i = response.length; i < 8; i++) {
              response.push({ name: "" });
            }
            this.$store.commit(categoryName, response);
          });
          break;
        case "distance":
          GridApi.requestGridStoresByDistance(data, response => {
            for (var i = response.length; i < 8; i++) {
              response.push({ name: "" });
            }
            this.$store.commit(categoryName, response);
          });
          break;
      }
    }
  }
};
</script>

<style>
</style>
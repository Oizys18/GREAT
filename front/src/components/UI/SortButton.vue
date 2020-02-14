<template>

  <ul class="sort-elements">
    <div class="sort-wrapper">
    <li>
      <a href="#" @click="click('rating')">
        <span class="icon-cog"></span>
      </a>
    </li><br>
    <li>
      <a href="#" @click="click('random')">
        <span class="icon-cw"></span>
      </a>
    </li><br>
    <li>
      <a href="#" @click="click('distance')">
        <span class="icon-location"></span>
      </a>
    </li>
    </div>
  </ul>
</template>

<script>
import "@/assets/style/css/sortButton.css";
import GridApi from '../../apis/GridApi.js'
export default {
  name: "SortButton",
  data(){
    return{
      sort : ""
    };
  },
  methods: {
    click(type) {
      if(type!=this.sort){
        var x = this.$store.state.locationX;
        var y = this.$store.state.locationY;
        var categories = this.$store.state.categories;
        for (var i = 0; i < categories.length; i++) {
          var categoryName = categories[i].name;
          var categoryId = categories[i].id;
          this.apiCall(categoryId, categoryName, x, y, type);
        }
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
          this.sort="rating"
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
          this.sort="distance"
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
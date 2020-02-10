<template>
  <div class="sort-elements">
    <div class="btn-group">
      <button
        @click="orderByRating"
        id="rating"
        type="button"
        class="btn btn-primary sort rating"
      >평점순</button>

      <button
        @click="orderByDistance"
        id="distance"
        type="button"
        class="btn btn-primary sort distance"
      >거리순</button>
    </div>
  </div>
</template>

<script>
import "@/assets/style/css/sortButton.css";
import GridApi from "../../apis/GridApi.js";
export default {
  name: "SortButton",
  data() {
    return {
      order: ""
    };
  },
  methods: {
    orderByRating() {
      if (this.order != "rating") {
        this.order = "rating";
        console.log(this.order);
        var categories = this.$store.state.categories;
        for (var i = 0; i < categories.length; i++) {
          var categoryName = categories[i].name;
          var categoryId = categories[i].id;
          var data = {
            category: categoryId
          };
          GridApi.requestGridStoresByRating(data, response => {
            for (var i = response.length; i < 8; i++) {
                response.push({ name: "" });
            }
            this.$store.commit(categoryName, response);
          });
        }
      }
    },
    orderByDistance() {
      if (this.order != "distance") {
        this.order = "distance";
        console.log(this.order);
        var categories = this.$store.state.categories;
        for (var i = 0; i < categories.length; i++) {
          var categoryName = categories[i].name;
          var categoryId = categories[i].id;
          var x = this.$store.state.locationX;
          var y = this.$store.state.locationY;
          var data = {
            locationX: x,
            locationY: y,
            category: categoryId
          };
          GridApi.requestGridStores(data, response => {
            for (var i = response.length; i < 8; i++) {
                response.push({ name: "" });
            }
            this.$store.commit(categoryName, response);
          });
        }
      }
    }
  }
};
</script>

<style></style>

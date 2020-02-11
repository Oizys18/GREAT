<template>
  <div class="sort-elements">
    <div class="btn-group">
      <button @click="orderByType('rating')" id="rating" type="button" class="hellobutton">평점순</button>

      <button
        @click="orderByType('distance')"
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
      order: "distance"
    };
  },
  methods: {
    orderByType(type) {
      if (type != this.order) {
        this.order = type;
        this.$store.commit("reset");
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
          if (type == "rating") {
            this.apiCall(data.category, categoryName);
          } else {
            this.apiCall(data, categoryName);
          }
        }
      }
    },
    apiCall(data, categoryName) {
      if (this.order == "rating") {
        GridApi.requestGridStoresByRating(data, response => {
          for (var i = response.length; i < 8; i++) {
            response.push({ name: "" });
          }
          this.$store.commit(categoryName, response);
        });
      } else {
        GridApi.requestGridStores(data, response => {
          for (var i = response.length; i < 8; i++) {
            response.push({ name: "" });
          }
          this.$store.commit(categoryName, response);
        });
      }
    }
  }
};
</script>

<style>
.hellobutton {
  padding: 10px 30px 10px 30px;
  margin:10px;
  border: 1px solid rgb(180, 178, 173);
  border-radius: 10px;
  font-size: 20px;  
  font-style: bold;
  box-shadow: 3px 3px 5px grey;
  background-color: rgba(46, 94, 226, 0.925);
  color: white;
}
.hellobutton:hover {
  background-color: rgb(36, 182, 182);
}

</style>

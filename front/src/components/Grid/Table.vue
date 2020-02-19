<template>
  <div class="big-container" :key="tableKey">
    <div class="big-grid">
      <div class="big-box"><MainFoodGrid :num="0" :bookmark="bookmark" /></div>
      <div class="cross-box">
        <MainFoodGrid :num="1" :bookmark="bookmark" />
      </div>
      <div class="big-box"><MainFoodGrid :num="2" :bookmark="bookmark" /></div>
      <div class="cross-box">
        <MainFoodGrid :num="3" :bookmark="bookmark" />
      </div>
      <!-- <div><FoodCategory /></div> -->
      <div><GridMap v-on:newsearch="gogo" /></div>
      <div class="cross-box">
        <MainFoodGrid :num="4" :bookmark="bookmark" />
      </div>
      <div class="big-box"><MainFoodGrid :num="5" :bookmark="bookmark" /></div>
      <div class="cross-box">
        <MainFoodGrid :num="6" :bookmark="bookmark" />
      </div>
      <div class="big-box"><MainFoodGrid :num="7" :bookmark="bookmark" /></div>
    </div>
  </div>
</template>

<script>
import "@/assets/style/css/gridStyle.css";
import MainFoodGrid from "@/components/Grid/MainFoodGrid.vue";
import GridMap from "@/components/Grid/GridMap.vue";
import GridApi from "@/apis/GridApi.js";
import BookmarkApi from "@/apis/BookmarkApi.js";
export default {
  name: "Table",
  props: ["bookmark"],
  components: {
    MainFoodGrid,
    GridMap
  },
  data() {
    return {
      tableKey: 0
    };
  },
  mounted: function() {
    this.requestStoreList()
  },
  updated() {
    this.requestStoreList()
  },
  watch: {
    bookmark(v) {
      if (v == 0) {
        var x = this.$store.state.locationX;
        var y = this.$store.state.locationY;
        var categories = this.$store.state.categories;
        for (var i = 0; i < categories.length; i++) {
          var categoryName = categories[i].name;
          var categoryId = categories[i].id;
          this.requestStores(categoryId, categoryName, x, y);
        }
      } else {
        BookmarkApi.requestGridBookmarkStores(v, response => {
          this.setBookmarkStores(response);
        });
      }
    }
  },
  methods: {
    requestStoreList() {
      this.$store.state.storeInfo = null;
      if (this.bookmark == 0) {
        var x = this.$store.state.locationX;
        var y = this.$store.state.locationY;
        var categories = this.$store.state.categories;
        for (var i = 0; i < categories.length; i++) {
          var categoryName = categories[i].name;
          var categoryId = categories[i].id;
          this.requestStores(categoryId, categoryName, x, y);
        }
      } else {
        BookmarkApi.requestGridBookmarkStores(this.bookmark, response => {
          this.setBookmarkStores(response);
        });
      }
    },
    gogo() {
      this.tableKey += 1;
      this.$forceUpdate()
    },
    requestStores(categoryId, categoryName, x, y) {
      var data = {
        locationX: x,
        locationY: y,
        category: categoryId
      };
      GridApi.requestGridStoresByRandom(data, response => {
        this.$store.commit(categoryName, response);
      });
    },
    setBookmarkStores(list) {
      var categories = this.$store.state.categories;
      for (var i = 0; i < categories.length; i++) {
        var categoryName = categories[i].name;
        var startIndex = i * 8;

        this.$store.commit(
          categoryName,
          list.slice(startIndex, startIndex + 8)
        );
        this.$store.commit("reset");
      }
    }
  }
};
</script>

<style></style>

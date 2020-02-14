<template>
  <div class="M-table">
    <MobileFoodCategory />
  </div>
</template>

<script>
import MobileFoodCategory from "@/components/Grid/MobileGrid/MobileFoodCategory.vue";
import GridApi from '@/apis/GridApi.js'
import BookmarkApi from '@/apis/BookmarkApi.js'
export default {
  name: "MobileTable",
  components: {
    MobileFoodCategory
  },
  props: ["bookmark"],
  mounted() {
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
  methods: {
    requestStores(categoryId, categoryName, x, y) {
      var data = {
        locationX: x,
        locationY: y,
        category: categoryId
      };
      GridApi.requestGridStoresByRandom(data, response => {
        for (var i = response.length; i < 8; i++) {
          response.push({ name: "" });
        }
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
      }
    }
  }
};
</script>

<style>
.M-table {
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>

<template>
  <div>
    
  </div>
</template>

<script>
import GridApi from "@/apis/GridApi.js";
export default {
  name: "MobileGridItem",
  components: {
  },
  data() {
    return {
    };
  },
  methods: {
    storeInfo(idx) {
      GridApi.requestStoreInfo(this.itemName[idx].id, response => {
        this.$store.state.storeInfo = response;
      });
    }
  },
  computed: {
    categoryName() {
        var num = this.$store.state.viewcategory;
      return this.$store.state.categories[num].name;
    },
    indexList() {
      var listName = this.categoryName + "index";
      return this.$store.state[listName];
    },
    itemName() {
      return this.$store.state[this.categoryName];
    },
  }
};
</script>

<style></style>

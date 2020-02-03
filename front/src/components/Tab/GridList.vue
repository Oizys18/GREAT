<template>
  <div class="gridlist-box">
      <v-list>
        <v-list-item v-for="item in items" :key="item.title">
          
          <GridBookmark/>
         
        </v-list-item>
      </v-list>
  </div>
</template>

<script>
import GridBookmark from "@/components/Tab/GridBookmark.vue";
export default {
  name: "GridList",
  components:{
    GridBookmark,
  },
  data() {
    return {
      
    };
  },
  computed:{
    items: function(){
      return this.$store.state.gridbookmarks;
    }
  }
};
</script>

<style></style>

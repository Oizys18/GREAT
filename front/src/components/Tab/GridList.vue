<template>
  <div class="gridlist-box">
      <v-list>
        <!-- <v-list-item v-for="(item,index) in items" :key="item.title">
          <GridBookmark :gridbookmarkIdx=index />
        </v-list-item> -->
        

        <v-list-item v-for="idx in 5 "  :key="idx" >
          <GridBookmark :gridbookmarkIdx=idx />
        </v-list-item>  

      </v-list>
  </div>
</template>

<script>
import GridBookmark from "@/components/Tab/GridBookmark.vue";
export default {
  name: "GridList",
  props :["index"],
  components:{
    GridBookmark,
  },
  data() {
    return {
      
    };
  },
  computed:{
    //데이터 받기
    items: function(){
      return this.$store.state.gridbookmarks;
    },
  
  }
};
</script>

<style></style>

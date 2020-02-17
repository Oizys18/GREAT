<template>
  <div class="gridlist-box">
      <v-list class="">
        <v-list-item v-for="item in items" :key="item.id"
          class="gridbookmark-container">
          <!-- <GridBookmark :gridbookmarkIdx=index /> -->
          <GridBookmark :gridbookmarkItem=item />
          <!-- <v-divider v-if="isdivider(index)" class="mx-4" vertical></v-divider> -->
        </v-list-item>
        <!-- {{itemL}} -->
        <!-- {{this.items}} -->

      </v-list>
  </div>
</template>

<script>
import GridBookmark from "@/components/Tab/GridBookmark.vue";
import MypageApi from '@/apis/MypageApi'
// import axios from "axios";
export default {
  name: "GridList",
  props :[],
  components:{
    GridBookmark,
  },
  data() {
    return {
      listKey: 0,
      //items :this.$store.state.userGridList,
    };
  },
  computed:{
    // items: function(){
    //   return this.$store.state.gridbookmarks;
    // },
    items:function(){
      // this.items = this.$store.state.userGridList 
      return this.$store.state.userGridList;
    }
  
  },
  watch:{
    // items(){
    //   this.items = this.$store.state.userGridList
    //   this.listKey += 1
    //   console.log(this.listKey)
    // },

  },
  mounted:function(){
    //사용자의 gridbookmark list 목록 요청
    
    MypageApi.requestGridbookmarkList(response=>{
      this.$store.commit('userGridList',response)
      // this.$stroe.state.userGridBookmarkList=response
    })
   
  },
  methods:{
    isdivider(index){
      if(index%2!=0) return false;
      else return true;
    },
 
  },
};
</script>

<style></style>

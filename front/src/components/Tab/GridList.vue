<template>
  <div class="gridlist-box">
      <v-list class="">
        <v-list-item v-for="(item,index) in items" :key="item.title"
          class="gridbookmark-container">
          <GridBookmark :gridbookmarkIdx=index />
          <!-- <v-divider v-if="isdivider(index)" class="mx-4" vertical></v-divider> -->
        </v-list-item>
        
        <!-- <v-list-item v-for="idx in 5 "  :key="idx"  >
          <GridBookmark :gridbookmarkIdx=idx />
        </v-list-item>   -->

      </v-list>
  </div>
</template>

<script>
import GridBookmark from "@/components/Tab/GridBookmark.vue";
import axios from "axios";
export default {
  name: "GridList",
  props :["index"],
  components:{
    GridBookmark,
  },
  data() {
    return {
      gridbookmark:[],
    };
  },
  computed:{
    //데이터 받기
    items: function(){
      return this.$store.state.gridbookmarks;
    },
  
  },
  methods:{
    isdivider(index){
      if(index%2!=0) return false;
      else return true;
    },
    getGridbookmark(){
      axios
        .get("http://172.17.174.33:8080/bookmark/{{user.id}}/G",{
            //사용자 id에 해당하는 grid bookmarks목록을 불러온다.
        })
        .then(res=>{
          //gridbookmark목록 저장
          this.gridbookmarks = res.datad;
        })
    }
  },
};
</script>

<style></style>

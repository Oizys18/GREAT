<template>
  <div class="gridlist-box">
      <v-list class="">
        <v-list-item v-for="item in items" :key="item.id"
          class="gridbookmark-container">
          <!-- <GridBookmark :gridbookmarkIdx=index /> -->
          <GridBookmark :gridbookmarkItem=item />
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
import MypageApi from '../../apis/MypageApi'
export default {
  name: "GridList",
  props :[],
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
  
  },
  mounted:function(){
    //사용자의 gridbookmark list 목록 요청
    MypageApi.requestGridbookmarkList(response=>{
      this.$store.state.gridbookmarks=response
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

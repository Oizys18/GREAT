<template>
  <div class="gridlist-box">
      <v-list class="">
        <v-list-item v-for="item in items" :key="item.title"
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
// import axios from "axios";
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
    MypageApi.requestGridbookmarkList(this.user.id,response=>{
      console.log(response)
      this.$stroe.state.userGridBookmarkList=response
    })
    // axios
    //   .get("http://172.17.174.33:8080/bookmark/1/G",{
    //       //사용자 id에 해당하는 grid bookmarks(G)목록을 불러온다.
    //   })
    //   .then(res=>{
    //     //gridbookmark목록 저장
    //     this.list = res.data;
    //   })
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

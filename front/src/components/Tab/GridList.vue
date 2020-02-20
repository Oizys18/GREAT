<template>
  <div class="gridlist-box">
      <v-list  >
        <v-list-item v-for="item in items" :key="item.id"
          class="gridbookmark-container">
          <GridBookmark :gridbookmarkItem=item />
        </v-list-item>
      </v-list>
  </div>
</template>

<script>
import GridBookmark from "@/components/Tab/GridBookmark.vue";
import MypageApi from '@/apis/MypageApi'
export default {
  name: "GridList",
  components:{
    GridBookmark,
  },
  computed:{
    items:function(){
      return this.$store.state.userGridList;
    }
  },
  watch:{
    

  },
  mounted:function(){
    //사용자의 gridbookmark list 목록 요청
    MypageApi.requestGridbookmarkList(response=>{
      this.$store.commit('userGridList',response)
    })
   
  },
};
</script>


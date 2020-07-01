<template>
  <div class="gridbookmark-box" >
    
    <v-list-item-icon class="girdbookmark-elem-star">
      <v-btn text icon color="#FFD900">
        <v-icon  v-if="true">mdi-star</v-icon>
      </v-btn>
    </v-list-item-icon>

    <!-- 북마크 이름 -->
    <v-list-item-content class="girdbookmark-elem-title" >
      <v-list-item-title v-if="!editFlag" @click="gridDetail(gridbookmarkItem.id)">{{gridbookmarkItem.name}} </v-list-item-title>
      <v-list-item-title v-else>
        <input v-model="editTitle" id="title_modify" name="title_modify" 
        class="title-modify-input" type="text"/> 
      </v-list-item-title>
    </v-list-item-content>

    <!-- 수정 버튼-->
    <v-list-item-icon class="girdbookmark-elem-edit">
      <v-btn  v-if="!editFlag" class="ma-2" text icon color="#58ABDE" id=btn-edit
        v-on:click="clickEditBtn">
        <v-icon>mdi-pencil</v-icon>
      </v-btn>
      <v-btn  v-else class="ma-2" text icon color="#4AAF6A" id=btn-edit
        v-on:click="editGridBookmark_click" 
        :disabled="!isTitleForm"  >
        <v-icon>mdi-checkbox-marked-circle</v-icon>
      </v-btn>
    </v-list-item-icon>

    <!-- 삭제 버튼 -->
    <v-list-item-icon class="girdbookmark-elem-delete" id="btn-delete">
      <v-btn class="ma-2" text icon color="#8A8989" id="btn-delete"
        v-on:click="delteGridbookmark">
        <v-icon>mdi-delete</v-icon>
      </v-btn>
    </v-list-item-icon>
  </div>
</template>

<script>
import MypageApi from '@/apis/MypageApi'
export default {
  name: "GridBookmark",
  props:["gridbookmarkItem"],
  data(){
    return{
      editFlag:false, 
      isTitleForm:true, 
      editTitle:null,
    }
  },
  watch:{
    editTitle(v){
      if(v.length<=0){
        this.isTitleForm=false;
      }else{
        this.isTitleForm=true;
      }
    }

  },
  methods:{
    clickEditBtn(){
      this.editFlag=true;
      this.editTitle=this.gridbookmarkItem.name;
    },
    editGridBookmark_click(){ //수정 확인 버튼 클릭
      this.gridbookmark = this.gridbookmarkItem;
      this.gridbookmark.name=this.editTitle;

       MypageApi.modifyGridbookmark(this.gridbookmarkItem,response=>{
        if(response=='success'){
          this.$store.commit('modifyGridName',this.gridbookmark);
        }
      })
      this.editFlag=false;
    },
    delteGridbookmark(){
      MypageApi.deleteGridbookmark(this.gridbookmarkItem.id,response=>{
        if(response=='success'){
          alert('그리드 북마크가 삭제 되었습니다.')
          this.$store.commit('deleteGridItem',this.gridbookmarkItem.id)
        }
      })
    },
    gridDetail(id){ //클릭한 grid bookmark 화면 모달화면으로 넘겨준다.
      this.$router.push('/bookmarkGrid?bookmarkId=' + id)
    }
  }
};
</script>


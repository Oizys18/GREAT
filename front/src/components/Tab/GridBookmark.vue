<template>
  <div class="gridbookmark-box" >
    
    <v-list-item-icon class="girdbookmark-elem-star">
      <v-btn text icon color="#F5D82E">
        <v-icon  v-if="true">mdi-star</v-icon>
      </v-btn>
    </v-list-item-icon>

    <!-- 북마크 이름 -->
    <v-list-item-content class="girdbookmark-elem-title" >
      <v-list-item-title v-if="!editFlag">{{title}} </v-list-item-title>
      <v-list-item-title v-else>
        <input v-model="editTitle" id="title_modify" name="title_modify" 
        class="title-modify-input" type="text"/> 
      </v-list-item-title>
      
      <!-- <v-list-item-title v-text="item.title"></v-list-item-title> -->
    </v-list-item-content>

    <!-- 수정 버튼-->
    <v-list-item-icon class="girdbookmark-elem-edit">
      <v-btn  v-if="!editFlag" class="ma-2" text icon color="#7CC1EC" id=btn-edit
        v-on:click="clickEditBtn">
        <v-icon>mdi-pencil</v-icon>
      </v-btn>
      <v-btn  v-else class="ma-2" text icon color="#F5D82E" id=btn-edit
        v-on:click="editGridBookmark_click"
        :disabled="!isTitleForm"
      >
        <v-icon>mdi-checkbox-marked-circle</v-icon>
      </v-btn>
    </v-list-item-icon>

    <!-- 삭제 버튼 -->
    <v-list-item-icon class="girdbookmark-elem-delete" id="btn-delete">
      <v-btn class="ma-2" text icon color="grey" id="btn-delete"
        v-on:click="delteGridbookmark">
        <v-icon>mdi-delete</v-icon>
      </v-btn>
    </v-list-item-icon>
  </div>
</template>

<script>
// import axios from "axios";
export default {
  name: "GridBookmark",
  props:["gridbookmarkIdx"],
  data(){
    return{
      editFlag:false, //그리드 북마크 수정 여부 flag
      isTitleForm:true, //title input text여부 check flag -> 수정확인 버튼 disabled 여부  
      editTitle:'',
    }
  },
  watch:{
    editTitle:function(){
      //입력한 title이 맞는 경우인지 검사 -> 수정 확인 버튼 disabled 결정
      console.log( 'editTitle:'+this.editTitle)
      console.log('length check:'+this.editTitle.length)

      if(this.editTitle.length<=0){
          this.isTitleForm=false;
          console.log(' isTitleForm'+this.isTitleForm)
      }else this.isTitleForm=true;
    }
  },
  computed:{
    // title :{
    //   get : function(){
    //     return this.$store.state.gridbookmarks[this.gridbookmarkIdx].title
    //   },
    //   set : function(){
    //     // this.title = this.editTitle;
    //     console.log('3')
    //     return this.editTitle
    //     // if(this.editTitle.length>0) this.isTitleForm=true;
    //   }
      
    // }
    title : function(){
        return this.$store.state.gridbookmarks[this.gridbookmarkIdx].title
    }
  },
  
  methods:{
    editGridBookmark_axios(){
      console.log('수정 axios');
      // axios
      //   .put("http://172.17.174.33:8080/bookmark",{
      //     params: {
      //       bookmark: this.name //수정할 북마크 이름
      //     },
      //   })
      //   .then(res=>{
      //     //gridbookmark목록 삭제
      //     console.log("2.그리드 북마크 수정 완료"+res)
      //     this.editFlag=false;
      //   }); 
    },
    clickEditBtn(){
      this.editFlag=true;
      this.editTitle=this.title;
      console.log('click edit title button!')
      
    },
    editGridBookmark_click(){ //수정 확인 버튼
      console.log("수정 확인 버튼 클릭쓰 ")   
      console.log(' editTitle::'+this.editTitle)

      // console.log(this.itemKey)
      this.$store.state.gridbookmarks[this.gridbookmarkIdx].title = this.editTitle
      // this.title = this.editTitle;
      this.editFlag=false;

      console.log("title input 수정 후 클릭 ")   
    },
    delteGridbookmark(){
      console.log("1.그리드 북마크 삭제 클릭")
      // axios
      //   .delete("http://172.17.174.33:8080/bookmark/{{user.id}}",{
      //       //사용자 id에 해당하는 grid bookmarks목록을 불러온다.
      //   })
      //   .then(res=>{
      //     //gridbookmark목록 삭제
      //     console.log("2.그리드 북마크 삭제 완료"+res)
      //   });    
    },
  }
};
</script>


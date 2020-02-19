<template>
  <div
    v-if="storeInfo != null"
    id=""
    class="storeInfo-modal-container "
  >
    
    <div class="storeImfo-modal-img-container">
      <img v-if="storeInfo.image !==null || storeInfo.image != undefined" class="storeInfo-modal-image" :src="storeInfo.image"/>
      <img v-else class="storeInfo-modal-image" :src="'https://i.imgur.com/vpGJQAk.jpg'"> 
      
      <button v-on:click="exitModal" >
        <div class="storeInfo-modal-collide">✖</div>
      </button>

    </div>

    <!-- <div class="">
      <TitleText :textInfo="storeInfo" :flag="true" />
    </div> -->
    <div class="sidebar-text-title">
    <span>
        <div class="sidebar-bookmark" @click="bookmark">
          <svg class="modal-red-heart" :class="{'modal-white-heart': !'this.marked'}" viewBox="0 0 32 29.6" id="bookmark-heart">
            <path
              d="M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2
    c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z"
            />
          </svg>
        </div>
      <span class="sidebar-text-name">{{storeInfo.name}}</span>
    </span>
    <StarRating class="sidebar-text-rating" :rating="storeInfo.rating" />
    <i v-if="storeInfo.phone != '' && storeInfo.phone != undefined" class="fa fa-phone"></i>
    <span style="margin-left:5px">{{storeInfo.phone}}</span>
  </div>

  <TextInfo :textInfo="storeInfo" />
    
  </div>
</template>

<script>
import "@/assets/style/css/mypageStyle.css";

// import ImageInfo from "@/components/Sidebar/ImageInfo";
import TextInfo from "@/components/Sidebar/TextInfo";
import StarRating from "@/components/common/StarRating";
import GridApi from "@/apis/GridApi.js";
export default {
  name: "Sidebar",
  components: {
    TextInfo,
    StarRating
  },
  data(){
    return{
      isClicked:false,
      marked:true,
    }
  },
  computed: {
    storeInfo() {
      return this.$store.state.storeInfo;
    },
    reviewInfo() {
      return this.$store.state.reviewInfo;
    },
    
  },
  methods: {
    exitModal(){
        this.isClicked=true;
        this.$emit('exit_Clicked',this.isClicked)
        
    },
    //title text
    bookmark() {
      if(this.marked){
        this.requestDelete()
      } 
    },
    requestDelete() {
      var data = {
        'user' : sessionStorage.getItem('id'),
        'store': this.storeInfo.id
      }

      GridApi.requestBookmarkDelete(data, response => {
        if(response === 'success') {
          alert("북마크 삭제가 완료되었습니다.")
          this.$store.commit('deleteBookmarkStore', this.storeInfo.id)
          this.marked = false
        }
      }, () => {
        alert('로그인 후 북마크 해제할 수 있습니다.')
      })
    }
  }
};
</script>


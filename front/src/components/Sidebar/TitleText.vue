<template>
  <div class="sidebar-text-title">
    <span>
        <div class="sidebar-bookmark" @click="bookmark">
          <svg class="sidebar-heart" viewBox="0 0 32 29.6" id="bookmark-heart">
            <path
              d="M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2
    c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z"
            />
          </svg>
        </div>
      <span class="sidebar-text-name">{{store.name}}</span>
    </span>
    <StarRating class="sidebar-text-rating" :rating="store.rating" />
    <i v-if="store.phone != '' && store.phone != undefined" class="fa fa-phone"></i>
    <span style="margin-left:5px">{{store.phone}}</span>
  </div>
</template>

<script>
import StarRating from "@/components/common/StarRating";
import GridApi from "@/apis/GridApi.js"
export default {
  name: "TitleText",
  props: ["textInfo"],
  components: {
    StarRating
  },
  data() {
    return {
      marked: false,
    }
  },
  mounted() {
    this.checkMarked()
  },
  computed: {
    store() {
      return this.textInfo;
    },
  },
  watch: {
    store() {
      this.checkMarked()
    }
  },
  methods: {
    checkMarked() {
      var heartBtn = document.getElementById("bookmark-heart")
      var bookmarkList = this.$store.state.bookmarkStoreList

      var bookmark = bookmarkList.find(item => {
        return item.id === this.store.id
      })

      if(bookmark === undefined) {
        heartBtn.style = "fill: white"
        this.marked = false
      }
      else {
        heartBtn.style = "fill: red"
        this.marked = true
      }
    },
    bookmark() {
      if(!this.marked){
        this.requestPost()
      } 
      else {
        this.requestDelete()
      }
    },
    requestPost() {
      var heartBtn = document.getElementById("bookmark-heart")
      var data = {
        'stores': [this.store.id],
        'type': 'S',
        'user': sessionStorage.getItem('id')
      }

      GridApi.requestBookmarkPost(data, response => {
        if(response !== null) {
            this.bookmarkId = response.id
            alert("북마크 등록이 완료되었습니다.")
            this.$store.commit('addBookmarkStore', this.store)
            heartBtn.style = "fill: red"
            this.marked = true
          }
        }, () => {
          alert('로그인 후 북마크 할 수 있습니다.')
        })
    },
    requestDelete() {
      var heartBtn = document.getElementById("bookmark-heart")
      var data = {
        'user' : sessionStorage.getItem('id'),
        'store': this.store.id
      }

      GridApi.requestBookmarkDelete(data, response => {
        if(response === 'success') {
          alert("북마크 삭제가 완료되었습니다.")
          this.$store.commit('deleteBookmarkStore', this.store.id)
          heartBtn.style = "fill: white"
          this.marked = false
        }
      }, () => {
        alert('로그인 후 북마크 해제할 수 있습니다.')
      })
    }
  },
};
</script>

<style>
</style>
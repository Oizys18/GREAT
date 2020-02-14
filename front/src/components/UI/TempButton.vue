<template>
  <button @click="gridBookmark">북마크</button>
</template>

<script>
import BookmarkApi from '@/apis/BookmarkApi.js'
export default {
  name: 'TempButton',
  methods: {
    gridBookmark() {
      this.$store.commit('setGridBookmarkList')

      var data = {
        'name': '그리드 테스트',
        'stores': this.$store.state.gridBookmarkStoreList,
        'type': 'G',
        'user': localStorage.getItem('id')
      }

      BookmarkApi.requestGridBookmarkPost(data, response => {
        if(response == 'success') {
          alert('그리드 북마크를 등록했습니다.')
        }
      }, () => { 
        alert('그리드 북마크는 로그인 후 가능합니다.')
      })
    }
  },
}
</script>

<style>

</style>
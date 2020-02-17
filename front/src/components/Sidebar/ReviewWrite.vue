<template>
  <div class="sidebar-review-write" :key="componentKey">
    <div>
      <i class="material-icons">create</i>
      <span class="sidebar-text-text">리뷰 작성</span>
    </div>
    <textarea 
    class="sidebar-review-textarea" 
    placeholder="리뷰를 입력하세요." 
    id="text" 
    name="text" 
    rows="4"></textarea>
    <StarRatingInput class="sidebar-review-rating"/>
    <button 
      class="sidebar-review-btn"
      @click="writeReview">
      작성 완료</button>
  </div>
</template>

<script>
import '@/assets/style/css/Sidebar.css'
import StarRatingInput from '@/components/common/StarRatingInput'
import GridApi from '@/apis/GridApi.js'
export default {
  name: 'ReviewWrite',
  props: ['storeId'],
  components: {
    StarRatingInput
  },
  data() {
    return {
      componentKey: 0
    }
  },
  methods: {
    writeReview() {
      var rating = this.$store.state.starRating
      var reviewText = document.getElementById("text")

      var data = {
        'contents': reviewText.value,
        'date': new Date(),
        'rating': rating,
        'store': this.storeId,
        'writer': localStorage.getItem('id')
      }

      this.requestPost(data)
    },
    requestPost(data) {
      GridApi.requestReviewPost(data, response => {
        if(response === 'success') {
          alert('리뷰가 등록되었습니다.\n등록한 리뷰는 MyPage에서 확인가능합니다.')
          this.requestReviewInfo()
          this.componentKey++
        }
      },() => {
        alert('로그인 후 리뷰를 작성할 수 있습니다.')
      })
    },
    requestReviewInfo() {
      GridApi.requestReviewInfo(this.storeId, response => {
        this.$store.state.reviewInfo = response
      })
    }
  },
}
</script>

<style>

</style>
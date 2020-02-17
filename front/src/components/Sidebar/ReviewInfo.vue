<template>
  <div class="sidebar-review">
    <template v-for="review in reviewList">
      <div :key="review.id" class="sidebar-review-area">
        <span style="display:block">{{review.contents}}</span>
        <span class="sidebar-review-date">{{review.date}}</span>
        <StarRating :rating="review.rating"/>
      </div>  
    </template>
    <div 
      v-if="reviewList.length == 0"
      class="sidebar-review-area"> 등록된 리뷰가 없습니다. </div>
    <ReviewWrite :storeId="storeId"/>
  </div>
</template>

<script>
import ReviewWrite from '@/components/Sidebar/ReviewWrite'
import StarRating from '@/components/common/StarRating'
export default {
  name: 'ReviewInfo',
  props: ['storeId'],
  components: {
    ReviewWrite,
    StarRating
  },
  computed: {
    reviewList() {
      return this.$store.state.reviewInfo
    }
  },
}
</script>

<style>

</style>
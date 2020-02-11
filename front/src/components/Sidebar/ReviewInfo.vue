<template>
  <div class="sidebar-review">
    <!-- <template v-for="review in reviewList">
      <div :key="review.id" class="sidebar-review-area">
        <span>{{review.contents}}</span>
      </div>  
    </template> -->
    <p class="review-write" @click="reviewWriting = !reviewWriting">리뷰 남기기</p>
    <ReviewWrite v-if="reviewWriting"/>
  </div>
</template>

<script>
import ReviewWrite from '../Sidebar/ReviewWrite'
export default {
  name: 'ReviewInfo',
  props: ['reviewInfo'],
  data() {
    return {
      reviewWriting: false
    }
  },
  components: {
    ReviewWrite
  },
  computed: {
    reviewList() {
      return this.reviewInfo
    }
  },
}
</script>

<style>

</style>
<template>
  <div class="sidebar-review">
    <!-- <template v-for="review in reviewList">
      <div :key="review.id" class="sidebar-review-area">
        <span>{{review.contents}}</span>
      </div>  
    </template> -->
    <ReviewWrite :storeId="storeId"/>
  </div>
</template>

<script>
import ReviewWrite from '../Sidebar/ReviewWrite'
export default {
  name: 'ReviewInfo',
  props: ['reviewInfo', 'storeId'],
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
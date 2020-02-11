<template>
  <div class="sidebar-review-write">
    <textarea 
    class="sidebar-review-textarea" 
    placeholder="리뷰를 입력하세요." 
    id="text" 
    name="text" 
    rows="4"></textarea>
    <StarRatingInput class="sidebar-review-rating"/>
  </div>
</template>

<script>
import '../../assets/style/css/Sidebar.css'
import StarRatingInput from '../common/StarRatingInput'
export default {
  name: 'ReviewWrite',
  components: {
    StarRatingInput
  },
}
</script>

<style>

</style>
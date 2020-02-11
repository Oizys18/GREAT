<template>
  <div v-if="storeInfo != null" class="sidebar-container animated bounceInLeft delay:0.05s">
    <ImageInfo :url="storeInfo.image"/>
    <TextInfo :textInfo="storeInfo"/>
    <ReviewInfo :reviewInfo="reviewInfo" />
  </div>
</template>

<script>
import '../../assets/style/css/Sidebar.css'
import ImageInfo from '../Sidebar/ImageInfo'
import TextInfo from '../Sidebar/TextInfo'
import ReviewInfo from '../Sidebar/ReviewInfo'
export default {
  name: 'Sidebar',
  components: {
    ImageInfo,
    TextInfo,
    ReviewInfo
  },
  computed: {
    storeInfo() {
      return this.$store.state.storeInfo
    },
    reviewInfo() {
      return this.$store.state.reviewInfo
    }
  }
}
</script>

<style>

</style>
<template>
  <div class="sidebar-container">
    <ImageInfo :url="storeInfo.image"/>
    <TextInfo :textInfo="storeInfo"/>
    
  </div>
</template>

<script>
import '../../assets/style/css/Sidebar.css'
import ImageInfo from '../Sidebar/ImageInfo'
import TextInfo from '../Sidebar/TextInfo'
export default {
  name: 'Sidebar',
  components: {
    ImageInfo,
    TextInfo
  },
  computed: {
    storeInfo() {
      return this.$store.state.storeInfo
    }
  },
}
</script>

<style>

</style>
<template>
  <div class="sidebar-container">
    <!-- <div class="sidebar-image">aa</div> -->
    <StoreImage :url="storeInfo.image"/>
  </div>
</template>

<script>
import '../../assets/style/css/Sidebar.css'
import StoreImage from '../Sidebar/StoreImage'
import GridApi from '../../apis/GridApi.js'
export default {
  name: 'Sidebar',
  props: ["id"],
  components: {
    StoreImage 
  },
  mounted() {
    GridApi.requestStoreInfo(this.id, response => {
      this.$store.state.storeInfo = response
    })
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
<template>
  <div class="sidebar-text-body">
    <div v-if="store.location_name != null" class="sidebar-text-line">
      <i class="material-icons">location_on</i> 
      <span class="sidebar-text-text">{{store.location_name}}</span>
    </div>
    <div v-if="store.open_time != null" class="sidebar-text-line">
      <i class="material-icons">access_alarm</i> 
      <span class="sidebar-text-text">{{store.open_time}}</span> 
    </div>
    
    <div v-if="tagList != null" class="sidebar-text-tag">
      <template v-for="tag in tagList">
        <Chip :key="tag" :text="tag" />
      </template>
    </div>
  </div>
</template>

<script>
import Chip from '../common/Chip'
export default {
  name: 'BodyText',
  props: ["textInfo"],
  components: {
    Chip
  },
  computed: {
    store() {
      return this.textInfo
    },
    tagList() {
      if(this.store.tag != undefined && this.store.tag != '') {
        return this.store.tag.split(",")
      }
      return null
    }
  },
}
</script>

<style>

</style>
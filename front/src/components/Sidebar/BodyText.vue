<template>
  <div class="sidebar-text-body">
    <p><i class="far fa-map-marker-alt"></i> <span>{{store.location_name}}</span></p>
    <p><i class="far fa-clock"></i> <span>{{store.open_time}}</span></p>
    
    <div class="sidebar-text-tag">
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
      return this.store.tag.split(",")
    }
  },
}
</script>

<style>

</style>
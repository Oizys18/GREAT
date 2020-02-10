<template>
  <div class="sidebar-text-title">
    <span class="sidebar-text-name">{{store.name}}</span>
    <StarRating class="sidebar-text-rating" :rating="store.rating"/>
    <i class="fa fa-phone"></i> <span>{{store.phone}}</span>
  </div>
</template>

<script>
import StarRating from '@/components/common/StarRating'
export default {
  name: 'TitleText',
  props: ["textInfo"],
  components: {
    StarRating
  },
  computed: {
    store() {
      return this.textInfo
    }
  },
}
</script>

<style>

</style>
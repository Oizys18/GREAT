<template>
  <div class="sidebar-text">
    <TitleText :textInfo="store"/>
    <BodyText :textInfo="store"/>
  </div>
</template>

<script>
import TitleText from '../Sidebar/TitleText'
import BodyText from '../Sidebar/BodyText'
export default {
  name: 'TextInfo',
  props: ['textInfo'],
  components: {
    TitleText,
    BodyText
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
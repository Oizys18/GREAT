<template>
  <div class="sidebar-text">
    <TitleText :textInfo="store"/>
    <BodyText :textInfo="store"/>
    <MenuText :menuInfo="store.menu" />
  </div>
</template>

<script>
import TitleText from '../Sidebar/TitleText'
import BodyText from '../Sidebar/BodyText'
import MenuText from '../Sidebar/MenuText'
export default {
  name: 'TextInfo',
  props: ['textInfo'],
  components: {
    TitleText,
    BodyText,
    MenuText
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
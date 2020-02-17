<template>
  <div class="sidebar-text">
    <BodyText :textInfo="store"/>
    <MenuText :menuInfo="store.menu" />
  </div>
</template>

<script>
import BodyText from '@/components/Sidebar/BodyText'
import MenuText from '@/components/Sidebar/MenuText'
export default {
  name: 'TextInfo',
  props: ['textInfo'],
  components: {
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
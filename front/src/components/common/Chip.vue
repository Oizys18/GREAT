<template>
  <div class="text-chip">
    {{chipText}}
  </div>
</template>

<script>
import '@/assets/style/css/chip.css'
export default {
  name: 'Chip',
  props: ["text"],
  computed: {
    chipText() {
      return this.text
    }
  },
}
</script>

<style>

</style>
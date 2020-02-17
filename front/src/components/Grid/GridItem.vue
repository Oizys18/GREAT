<template>
  <div class="grid-item">
    <span class="grid-item-name">{{this.name[0]}}</span>
  </div>
</template>

<script>
import '@/assets/style/css/gridStyle.css'
export default {
  name: "GridItem",
  props: ["name"],
  data() {
    return {
    };
  },
  computed: {
  },
  methods:{
  }
};
</script>

<style></style>

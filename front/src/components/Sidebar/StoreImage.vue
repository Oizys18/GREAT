<template>
  <div>
    <img :src="imageUrl"/>
  </div>
</template>

<script>
export default {
  name: "StoreImage",
  props: ["url"],
  computed: {
    imageUrl() {
      return this.url;
    }
  }
};
</script>

<style>
</style>
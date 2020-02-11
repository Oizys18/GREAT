<template>
  <div>
    <template v-for="(className, i) in starClass">
      <span :key="i" :class="className" class="rating-star fa-star"></span>
    </template>
  </div>
</template>

<script>
export default {
  name: "StarRating",
  props: ["rating"],
  computed: {
    starClass() {
      var list = []
      var className = "fa fa-star"
      for(var i = 0; i < this.rating; i++) {
        list.push(className + ' checked')
      }
      for(var j = this.rating; j < 5; j++) {
        list.push(className)
      }
      return list
    }
  },
}
</script>

<style>
  .rating-star {
    color: #bbb;
  }
  .checked {
    color: orange
  }
</style>
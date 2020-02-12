<template>
  <div class="star-rating">
    <template v-for="(idx, i) in idxList">
      <input 
        :key="idx" 
        :id="'star-' + idx" 
        type="radio" 
        name="rating" 
        :value="idx" 
        @click="starClicked(idx)"/>
      <label :key="i+10" :for="'star-' + idx">
        <i class="active fa fa-star" aria-hidden="true"></i>
      </label>
    </template>
  </div>
</template>

<script>
import "../../assets/style/css/starRating.css";
export default {
  name: "StarRatingInput",
  data() {
    return {
      idxList: [5, 4, 3, 2, 1]
    };
  },
  methods: {
    starClicked(idx) {
      this.$store.state.starRating = idx
    }
  },
};
</script>

<style>
</style>
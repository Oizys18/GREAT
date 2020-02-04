<template>
  <div class="tab-review-card">
        <div class="review-card-name">
          <h4>
            {{this.$store.state.reviews[this.reviewIdx].name}}
          </h4>
        </div>

        <div class="review-card-contents">
          <p>{{this.$store.state.reviews[this.reviewIdx].contents}}</p>
        </div>

        <div class="review-card-rating">
        <!-- <h5>★★★☆☆</h5> -->
          {{this.$store.state.reviews[this.reviewIdx].rating}}
        </div>

    </div>
</template>
 
<script>
export default {
  name: "TabCard",
  props:["reviewIdx"],
};
</script>



<style>
 
</style>
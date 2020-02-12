<template>
  <div class="star-rating">
      <input id="star-5" type="radio" name="rating" value="star-5" />
      <label for="star-5">
        <i class="active fa fa-star" aria-hidden="true"></i>
      </label>
      <input id="star-4" type="radio" name="rating" value="star-4" />
      <label for="star-4">
        <i class="active fa fa-star" aria-hidden="true"></i>
      </label>
      <input id="star-3" type="radio" name="rating" value="star-3" />
      <label for="star-3">
        <i class="active fa fa-star" aria-hidden="true"></i>
      </label>
      <input id="star-2" type="radio" name="rating" value="star-2" />
      <label for="star-2">
        <i class="active fa fa-star" aria-hidden="true"></i>
      </label>
      <input id="star-1" type="radio" name="rating" value="star-1" />
      <label for="star-1">
        <i class="active fa fa-star" aria-hidden="true"></i>
      </label>
    </div>
</template>

<script>
import '../../assets/style/css/starRating.css'
export default {
  name: 'StarRatingInput'
}
</script>

<style>

</style>
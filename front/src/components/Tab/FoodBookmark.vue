<template>
  <!-- <div class="foodbookmark-item">
    <img src="@/assets/img/cafe.png" class="foodgridbookmark-img" >
    <div class="foodgridbookmark-box">
      <div class="foodgridbookmakr-hover-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </div>
    </div>
   </div> -->
   <div class="hvrbox">
	<img src="@/assets/img/cafe.png" alt="Mountains" class="hvrbox-layer_bottom">
	<div class="hvrbox-layer_top">
		<div class="hvrbox-text">Store name 
    <StarRating :rating="3" /> 
    </div>
	</div>
</div>
</template>
 
<script>
import StarRating from '../common/StarRating.vue'
export default {
  name: "FoodBookmark",
  components:{
    StarRating,
  }
};
</script>


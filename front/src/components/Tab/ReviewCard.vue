<template>
  <div class="tab-review-card">
        <div class="review-card-name">
          <h4>
            {{this.stroeName}}
          </h4>
        </div>

        <div class="review-card-contents">
          <p>{{this.reviewItem.contents}}</p>
        </div>

        <div class="review-card-rating">
          <StarRating :rating="reviewItem.rating" /> 
        </div>

    </div>
</template>
 
<script>
import axios from 'axios'
import StarRating from '@/components/common/StarRating.vue'
export default {
  name: "ReviewCard",
  props:["reviewItem"],
  components:{
    StarRating,
  },
  data() {
    return {
      stroeName:null,
    }
  },
  mounted:function(){
    axios
    .get('http://13.124.1.176/store/'+this.reviewItem.store, {
      headers: {
        Authorization: sessionStorage.getItem('token')
      }
    })
    .then(res => {
      this.stroeName=res.data.data.name
    })
    
  },
};
</script>


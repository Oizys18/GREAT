<template>
  <div align='center'>
    <v-sheet class=""  max-width="900">
      <v-slide-group  v-model="model" class="slide-group" :show-arrows="showArrows">
        <v-slide-item 
          v-for="review in reviewList"
          :key="review"
          v-slot:default="{ }"
        >
          <v-card
          >
            <TabCard :reviewItem=review />
          </v-card>

        </v-slide-item>
      </v-slide-group>
        </v-sheet>
  </div>
</template>

<script>
import MypageApi from '../../apis/MypageApi'
import TabCard from "@/components/Tab/TabCard.vue";
export default {
  name: "Reviews",
  components: {
    TabCard,
  },
  data(){
      return{
        reviewList:[],
      }
  },
  computed:{
    totalReiviews : function(){
      return this.$store.state.reviews;
    },
    myReviews:function(){
      return this.$store.state.myReviews;
    }
  },
  mounted:function(){
    MypageApi.requestMyReviews(response=>{
      this.reviewList=response;
      console.log('요청받은 myreviews')
      console.log(response)
      //this.$store.state.MyReviews=response
    })
  }
};

</script>

<style></style>

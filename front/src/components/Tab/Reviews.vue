<template>
  <div align='center'>
    <v-sheet class="mx-auto" elevation="8" max-width="800">
      <v-slide-group  v-model="model" class="pa-4" :show-arrows="showArrows">
        <v-slide-item
          v-for="n in reviews"
          :key="n"
          v-slot:default="{ active, toggle }"
        >
          <v-card
            :color="active ? 'primary' : 'grey lighten-1'"
            @click="toggle" class="card-elem"
          >
            
            <Card />
          </v-card>

        </v-slide-item>
      </v-slide-group>
    </v-sheet>
  </div>
</template>

<script>
import Card from "@/components/Tab/Card.vue";
export default {
  name: "Reviews",
  components: {
    Card
  },
  data(){
      return{
           //임시 리뷰 카드 데이터
      currentOffset: 0,
      windowSize: 3,
      paginationFactor: 220,
      reviews: [
        {storename: 'Kin Khao',stars :"★★★☆☆", review: "Thai"},
        {storename: 'Jū-Ni',stars :"★★☆☆☆", review: "SushiJapanese $$$$"},
        {storename: 'Delfina',stars :"★☆☆☆", review: "Pizza Casual"},
        {storename: 'San Tung', stars :"★★★★☆",review: "Chinese  $$"},
        {storename: 'Anchor Oyster Bar', stars :"★★★☆☆",review: "Seafood Cioppino"},
        {storename: 'Locanda',stars :"★★★☆☆", review: "Italian"},
        {storename: 'Garden Creamery',stars :"★★★★★", review: "Ice cream"},
      ]
      
      }
  }
};
</script>

<style></style>

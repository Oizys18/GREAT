<template>
  <div align='center'>
    <v-sheet class=""  max-width="900">
      <v-slide-group  v-model="model" class="slide-group" :show-arrows="showArrows">
        <v-slide-item 
          v-for="(n,index) in totalReiviews"
          :key="n"
          v-slot:default="{  }"
        >
          <v-card
          >
            <TabCard :reviewIdx=index />
          </v-card>

        </v-slide-item>
      </v-slide-group>
        </v-sheet>
  </div>
</template>

<script>
import TabCard from "@/components/Tab/TabCard.vue";
export default {
  name: "Reviews",
  components: {
    TabCard,
  },
  data(){
      return{
      
      }
  },
  computed:{
    totalReiviews : function(){
      return this.$store.state.reviews;
    }
  }
};

</script>

<style></style>

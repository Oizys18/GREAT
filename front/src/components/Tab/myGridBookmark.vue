<template>
  <!-- <Sidebar/>
  <Table/> -->
  <div class="hh">
        <h1>hh</h1><br/><br/><br/><br/><br/>
        <h2>{{id}}</h2>
        <Sidebar/>
        <Table :bookmark="27"/>

       
   </div>

</template>

<script>
import Sidebar from "@/components/Sidebar/Sidebar.vue";
import Table from "@/components/Grid/Table.vue";
export default {
  name: "myGridBookmark",
  components: {
    Sidebar,
    Table
  },
  computed:{
    id :function(){
        console.log('ddddd:'+this.$store.state.userGridID )
        return this.$store.state.userGridID ;
    }  
  },
  
   
}
</script>
<style >
.hh {
    background-color: beige;
}
</style>
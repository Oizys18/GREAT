<template>
  <div>
    <Sidebar/>
    <Table />
  </div>
</template>

<script>
import Sidebar from '@/components/Sidebar/Sidebar.vue'
import Table from "@/components/Grid/Table.vue";
export default {
  name: "Main",
  components: {
    Table,
    Sidebar
  }
};
</script>

<style>

</style>

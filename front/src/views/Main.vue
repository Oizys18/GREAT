<template>
  <div>
    <Sidebar :id="1"/>
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

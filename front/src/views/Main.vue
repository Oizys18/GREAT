<template>
  <div>
    <Sidebar :id="1"/>
    <Table />
    <SortButton/>
  </div>
</template>

<script>
import Sidebar from '@/components/Sidebar/Sidebar.vue'
import SortButton from '@/components/UI/SortButton.vue'
import Table from "@/components/Grid/Table.vue";
export default {
  name: "Main",
  components: {
    Table,
    Sidebar,
    SortButton
  }
};
</script>

<style>

</style>

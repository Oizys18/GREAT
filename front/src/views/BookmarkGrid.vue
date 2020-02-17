<template>
  <div>
    <Sidebar />
    <Table :bookmark="bookmarkId"/>
  </div>
</template>

<script>
import Sidebar from "@/components/Sidebar/Sidebar.vue";
import Table from "@/components/Grid/Table.vue";
export default {
  name: 'BookmarkGrid',
  props: ["bookmarkId"],
  components: {
    Table,
    Sidebar
  }
}
</script>

<style>

</style>
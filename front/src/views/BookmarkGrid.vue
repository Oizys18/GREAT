<template>
  <div class="main">
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
  },
  mounted: function() {
    this.$store.state.tabFlag=true;
  },
}
</script>


<style>
.main {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(-45deg, rgb(255, 89, 100), #F6A035, rgb(236, 219, 58));
  background-size: 800% 400%;
  animation: gradientBG 5s ease infinite;
}

@keyframes gradientBG {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
</style>
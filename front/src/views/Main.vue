<template>
  <div class="main">
    <div v-if=isWeb>
      <Sidebar />
      <Table :bookmark="0" />
      <SortButton />
      <ChatUI/>
    </div>
    <div v-else>
      <MobileSortButton />
      <MobileTable :bookmark="0" />
    </div>
  </div>
</template>

<script>
import Sidebar from "@/components/Sidebar/Sidebar.vue";
import SortButton from "@/components/UI/SortButton.vue";
import Table from "@/components/Grid/Table.vue";
import MobileTable from "@/components/Grid/MobileGrid/MobileTable.vue";
import MobileSortButton from "@/components/Grid/MobileGrid/MobileSortButton.vue";
import ChatUI from "@/components/UI/ChatUI.vue";
export default {
  name: "Main",
  components: {
    Table,
    Sidebar,
    SortButton,
    MobileTable,
    MobileSortButton,
    ChatUI
  },
  computed:{
    isWeb(){
      if (window.screen.width > 800){
        return true
      } else{
        return false
      }
    }
  }
};
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
</style>

<template>
  <div class="main">
    <div v-show="!isMobile()">
      <Sidebar />
      <Table :bookmark="0" />
      <SortButton />
    </div>
    <div v-show="isMobile()">
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
export default {
  name: "Main",
  components: {
    Table,
    Sidebar,
    SortButton,
    MobileTable,
    MobileSortButton
  },
  methods: {
    isMobile() {
      if (
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        )
      ) {
        // 배포 전 false로 수정
        return true;
      } else {
        // 배포 전 true로 수정
        return false;
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

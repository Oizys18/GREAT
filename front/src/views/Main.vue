<template>
  <div>
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
  created: {
    mobileChecker() {}
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

<style></style>

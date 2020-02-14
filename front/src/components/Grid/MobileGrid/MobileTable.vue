<template>
  <div class="M-table">
    <MobileFoodCategory />
  </div>
</template>

<script>
import MobileFoodCategory from "@/components/Grid/MobileGrid/MobileFoodCategory.vue";
export default {
  name: "MobileTable",
  components: {
    MobileFoodCategory
  }
};
</script>

<style>
.M-table {
  width:100vw;
  height:100vh;
  display:flex;
  align-items: center;
  justify-content: center;
}

</style>

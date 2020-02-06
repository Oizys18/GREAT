<template>
  <div>
      <MapApp/>
  </div>
</template>
 <script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=f8d38a34b065785c71e6beed1528657f"></script>
<script>
import MapApp from "@/components/common/MapApp.vue"
export default {
  name: "Index",
  components: {
    MapApp
  },
  data() {
    return {
    };
  },
};
</script>

<style>

</style>

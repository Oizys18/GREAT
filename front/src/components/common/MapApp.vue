<template>
  <div id="dmap">
    <div id="map" class="kakao-map"></div>
  </div>
</template>
<script
  type="text/javascript"
  src="//dapi.kakao.com/v2/maps/sdk.js?appkey=f8d38a34b065785c71e6beed1528657f"
></script>
<script>
// import axios from "axios";
import "@/assets/style/css/animated.css";
export default {
  name: "MapApp",
  props: ["store_id"],
  data() {
    return {
      msg: "하이"
    };
  },
  mounted() {
    var locX = this.$store.state.storeInfo.map_x;
    var locY = this.$store.state.storeInfo.map_y;
    var mapContainer = document.getElementById("map"), // 지도를 표시할 div
      mapOption = {
        center: new kakao.maps.LatLng(locY, locX), // 지도의 중심좌표
        level: 4 // 지도의 확대 레벨
      };
    // 지도를 표시할 div와  지도 옵션으로  지도를 생성합니다
    var map = new kakao.maps.Map(mapContainer, mapOption);
    var marker = new kakao.maps.Marker({
      // 지도 중심좌표에 마커를 생성합니다
      position: map.getCenter()
    });
    // 지도에 마커를 표시합니다
    marker.setMap(map);
  },
  watch: {
    store_id() {
      var locX = this.$store.state.storeInfo.map_x;
      var locY = this.$store.state.storeInfo.map_y;
      var mapContainer = document.getElementById("map"), // 지도를 표시할 div
        mapOption = {
          center: new kakao.maps.LatLng(locY, locX), // 지도의 중심좌표
          level: 4 // 지도의 확대 레벨
        };
      // 지도를 표시할 div와  지도 옵션으로  지도를 생성합니다
      var map = new kakao.maps.Map(mapContainer, mapOption);
      var marker = new kakao.maps.Marker({
        // 지도 중심좌표에 마커를 생성합니다
        position: map.getCenter()
      });
      // 지도에 마커를 표시합니다
      marker.setMap(map);
    },
  }
};
</script>
<style>
.kakao-map {
  position: relative;
  width: 27vw;
  height: 42vh;
}
</style>

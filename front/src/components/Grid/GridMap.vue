<template>
  <div class="grid-map-container">
    <div id="main-grid-map" class="main-grid-map"></div>
    <button id="main-grid-map-research" @click="resetLocation"></button>
  </div>
</template>

<script
  type="text/javascript"
  src="//dapi.kakao.com/v2/maps/sdk.js?appkey=f8d38a34b065785c71e6beed1528657f"
></script>
<script>
import axios from "axios";
import "@/assets/style/css/animated.css";
export default {
  name: "GridMap",
  data() {
    return {
      address: "",
      addressList: []
    };
  },
  methods: {
    resetLocation() {
      var newAddress = prompt("새로운 주소를 입력해주세요");
      if (newAddress.length > 0) {
        var newConfirm = confirm(
          newAddress + ": 이 주소로 새로 검색하시겠습니까?"
        );
        if (newConfirm) {
          axios
            .get("https://dapi.kakao.com/v2/local/search/address.json", {
              params: {
                query: newAddress
              },
              headers: {
                Authorization: "KakaoAK f8d38a34b065785c71e6beed1528657f"
              }
            })
            .then(res => {
              console.log(res);
              this.$store.state.locationX = res.data.documents[0].x;
              this.$store.state.locationY = res.data.documents[0].y;
              this.$emit('newsearch')
            });
        }
      }
    }
  },
  mounted() {
    var locX = this.$store.state.locationX;
    var locY = this.$store.state.locationY;
    var mapContainer = document.getElementById("main-grid-map"), // 지도를 표시할 div
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
  }
};
</script>
<style>
.main-grid-map {
  height: 29vh;
  width: 29vh;
  margin: 0.5vh;
  border-radius: 20px;
  border: 3px solid transparent;
  box-shadow: 0 2px 2px 2px rgba(51, 51, 51, 0.534);

  display: flex;
  justify-content: center;

  color: black;
  font-weight: bold;
  background-color: transparent;
}
#main-grid-map-research {
  position: relative;
  border-radius: 20px;
  bottom: 30vh;
  width: 30vh;
  height: 30vh;

  background-color: transparent;
  z-index: 20;
}
</style>

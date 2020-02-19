<template>
  <div class="mapapp-container">
    <label for="address-input" style="padding:3px; margin:10px;"
      >주소입력</label
    >
    <input
      type="text"
      id="address-input"
      v-model="address"
      @keydown.enter="getXY"
      style="border:1px solid; margin:10px; padding:10px;"
    />
    <div class="map-search-btn" @click="getXY">검색</div>

    <div id="map" class="kakao-map search-map"></div>
    <br />
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
  name: "MapApp",
  data() {
    return {
      address: "",
      addressList: []
    };
  },
  methods: {
    getXY() {
      var componentInstance = this;
      axios
        .get("https://dapi.kakao.com/v2/local/search/address.json", {
          params: {
            query: this.address
          },
          headers: {
            Authorization: "KakaoAK f8d38a34b065785c71e6beed1528657f"
          }
        })
        .then(res => {
          this.addressList = res.data.documents;
          var mapContainer = document.getElementById("map"), // 지도를 표시할 div
            mapOption = {
              center: new kakao.maps.LatLng(
                res.data.documents[0].y,
                res.data.documents[0].x
              ), // 지도의 중심좌표
              level: 3 // 지도의 확대 레벨
            };

          var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

          // 지도를 클릭한 위치에 표출할 마커입니다
          var marker = new kakao.maps.Marker({
            // 지도 중심좌표에 마커를 생성합니다
            position: map.getCenter()
          });
          // 지도에 마커를 표시합니다
          marker.setMap(map);

          // 지도에 클릭 이벤트를 등록합니다
          // 지도를 클릭하면 마지막 파라미터로 넘어온 함수를 호출합니다
          kakao.maps.event.addListener(map, "click", function(mouseEvent) {
            // 클릭한 위도, 경도 정보를 가져옵니다
            var latlng = mouseEvent.latLng;

            // 마커 위치를 클릭한 위치로 옮깁니다
            marker.setPosition(latlng);
            axios
              .get(
                "https://dapi.kakao.com/v2/local/geo/coord2address.json?x=" +
                  latlng.getLng() +
                  "&y=" +
                  latlng.getLat() +
                  "&input_coord=WGS84",
                {
                  headers: {
                    Authorization: "KakaoAK f8d38a34b065785c71e6beed1528657f"
                  }
                }
              )
              .then(res => {
                var message =
                  "선택한 주소" +
                  res.data.documents[0].address.address_name +
                  "근처의 맛집으로 검색할까요? ";
                var check = confirm(message);
                if (check) {
                  componentInstance.$store.state.locationX = latlng.getLng();
                  componentInstance.$store.state.locationY = latlng.getLat();
                  componentInstance.$router.push("/main");
                }
              });
          });
        })
        .catch(() => {
          alert("지역명을 입력해주세요.");
        });
    }
  }
};
</script>
<style>
.mapapp-container {
  position: fixed;
  top: 10vh;
  left: 25vw;
  text-align: center;
}
.search-map {
  position: relative;
  width: 50vw;
  height: 60vh;
}
.map-search-btn {
  display: inline-block;
  background-color: #fbedeb;
  border-radius: 20px;
  font-size: 1.3rem;
  padding: 0.4em 0.7em 0.4em 0.7em;
  cursor: pointer;
  font-weight: bold;
}
</style>

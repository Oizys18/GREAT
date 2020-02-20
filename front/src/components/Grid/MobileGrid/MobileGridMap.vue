<template>
  <div class="m-grid-map-container">
    <div id="m-main-grid-map" class="m-main-grid-map"></div>
    <div class="m-search-input">
      <input type="text" id="m-map-input" @keydown.enter="searchNew" v-model="address" />
      <button id="m-map-go" @click="searchNew">검색</button>
    </div>
  </div>
</template>

<script
  type="text/javascript"
  src="//dapi.kakao.com/v2/maps/sdk.js?appkey=f8d38a34b065785c71e6beed1528657f"
></script>
<script>
import axios from "axios";
import GridApi from '@/apis/GridApi.js'
export default {
  name: "GridMap",
  data() {
    return {
      address: "",
      newAddress: "",
      addressList: []
    };
  },
  methods: {
    searchNew() {
      this.newAddress = this.address;
    },
    resetLocation() {
      var newAddress = this.newAddress;
      if (newAddress.length > 0) {
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
            this.$store.state.locationX = res.data.documents[0].x;
            this.$store.state.locationY = res.data.documents[0].y;
            this.$emit("newsearch");
            this.updateStoreList()
          });
      }
    },
    updateStoreList() {
      var x = this.$store.state.locationX;
      var y = this.$store.state.locationY;
      var categories = this.$store.state.categories;
      for (var i = 0; i < categories.length; i++) {
        var categoryName = categories[i].name;
        var categoryId = categories[i].id;
        this.requestStores(categoryId, categoryName, x, y);
      }
    },
    requestStores(categoryId, categoryName, x, y) {
      var data = {
        locationX: x,
        locationY: y,
        category: categoryId
      };
      GridApi.requestGridStoresByRandom(data, response => {
        this.$store.commit(categoryName, response);
      });
    },
  },
  mounted() {
    var locX = this.$store.state.locationX;
    var locY = this.$store.state.locationY;
    var mapContainer = document.getElementById("m-main-grid-map"), // 지도를 표시할 div
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
    newAddress() {
      this.resetLocation();
    }
  }
};
</script>
<style></style>

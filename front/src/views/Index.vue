<template>
  <div>
    <div class="index-background ">
      <div class="index-curtain">
        <div class="index-banner animated fadeInDown delay-0.2s ">
          <span>
            GrEat
          </span>
        </div>
        <!-- <div class="index-container animated fadeInDown delay-0.4s">
          <div class="index-card-container">
            <div class="index-card">
              <label for="address-input" style="padding:3px; margin:10px;"
                >주소입력</label
              >
              <input
                type="text"
                id="address-input"
                v-model="address"
                style="border:1px solid; margin:10px; padding:10px;"
              />
              <button
                @click="getXY"
                style="border:1px solid; margin: 10px; padding:10px;"
              >
                GOGO
              </button>
              <br />
              <p v-for="x in this.addressList" :key="x - id">
                {{ x.address.address_name }}
                <button>[선택]</button>
              </p>
              <label for="category-input" style="padding:3px; margin:10px;"
                >카테고리</label
              >
              <input
                type="text"
                id="category-input"
                v-model="category"
                style="border:1px solid; margin:10px; padding:10px;"
              />
              <button style="border:1px solid; margin: 10px; padding:10px;">
                GOGO
              </button>
            </div>
          </div>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import "@/assets/style/css/animated.css";
// import CardContainer from "@/components/common/CardContainer.vue";
export default {
  name: "Index",
  components: {
    // CardContainer
  },
  data() {
    return {
      address: "",
      category: "",
      addressList: []
    };
  },
  methods: {
    getXY() {
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
          console.log(res.data.documents[0].y);
          console.log(res.data.documents[0].x);
        });
    }
  },
  watch: {
    address() {
      console.log(this.address);
    }
  }
};
</script>

<style>
/* font-family: 'Lobster', cursive;
font-family: 'Righteous', cursive;
font-family: 'Poiret One', cursive;
font-family: 'Josefin Slab', serif;
font-family: 'Carter One', cursive;
font-family: 'Fredericka the Great', cursive; */

.index-banner {
  font-family: "Lobster", cursive;
  position: flex;
  padding-top: 5vh;
  justify-content: center;
  font-size: 23vh;
  color: rgba(246, 8, 0, 0.787);
  /* color:rgb(255, 94, 0); */
  /* font-weight: bold; */
  /* background: -webkit-linear-gradient(
    rgb(255, 255, 255),
    rgb(98, 98, 98),
    rgb(0, 0, 0)
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent; */
}
.index-background {
  /* background-image: url("https://cdn.vox-cdn.com/thumbor/XTn-0tqjh037qW59XLmXoMlxXjE=/0x0:2618x1472/1200x675/filters:focal(1100x527:1518x945)/cdn.vox-cdn.com/uploads/chorus_image/image/64045970/tacobell_7.0.0.1493054804.0.jpg"); */
  background-size: cover;
  background-color: rgb(248, 212, 141);
  height: 100vh;
  overflow-y: hidden;
  background-position: center;
}
/* 
.index-curtain {
  background: -webkit-linear-gradient(
    rgb(255, 145, 0),
    rgba(255, 217, 0, 0.931),
    rgba(253, 232, 139, 0.397)
  );
  height: 100vh;
} */

.index-container {
  display: inline-block;
}

@media (max-width: 800px) {
  .index-banner {
    font-size: 23vw;
    padding-top: 10vh;
  }
}

.index-card-container {
  width: 500px;
  height: 350px;
  background: black;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  opacity: 70%;
  border: 1px solid black;
  border-radius: 15px;
}
.index-card-container:hover {
  box-shadow: 0 8px 32px rgba(255, 255, 255, 0.507);
}

.index-card {
  background-color: white;
  margin: 20px;
  border-radius: 10px;
  width: 92%;
  height: 90%;
  opacity: 100%;
}
</style>

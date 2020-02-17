<template> 
  <!--food grid bookmark -->
  <div class="tab-food-box">
     <!-- <span v-for="item in foodgridbookmarkList" :key=item.id>
         <FoodBookmark :FoodBookmarkItem=item />
     </span> -->
     <span v-for="store in storeList" :key=store.id>
         <FoodBookmark :store=store />
     </span>
   </div>
</template>
 
<script>
//import MypageApi from '@/apis/MypageApi'
import FoodBookmark from "@/components/Tab/FoodBookmark.vue"
export default {
  name: "FoodList",
  components:{
      FoodBookmark,
  },
  data() {
    return {
      foodgridbookmarkList: [
        {id:"1",store_id:"37842648",name:"홍수계찜닭",location_name: "서울특별시 중구 명동8길 27 엠플라자 5층",rating: 4,image: "http://ldb.phinf.naver.net/20190814_60/1565746145059VhzV8_JPEG/PuHlztlwKTRRoqeJ6ZEXF31Z.JPG.jpg"},
        {id:"2",store_id:"37036817",name:"더식당",location_name: "서울특별시 중구 명동10길 36 2층",rating: 4,image: "http://ldb.phinf.naver.net/20191023_289/15718235773740MFGF_JPEG/BJ1VirHapUYoUiuTBZuTAywk.jpg"},
        {id:"3",store_id:"11592650",name:"명동교자 본점",location_name: "서울특별시 중구 명동10길 29",rating: 4,image: "http://ldb.phinf.naver.net/20181013_227/1539396528420UECHH_JPEG/hW6fzasUvHvuw87tK52i5wGP.jpg.jpg"},
        {id:"4",store_id:"1361256704",name:"권셰프식탁",location_name: "서울특별시 중구 명동8나길 35",rating: 4,image: "http://ldb.phinf.naver.net/20171003_57/1507002910903vEN8E_JPEG/5zeeBmzd2lj_DywnFd3FlXph.jpg"},
        {id:"5",store_id:"11679353",name:"하동관명동본점",location_name: "서울특별시 중구 명동9길 12",rating: 4,image: "http://ldb.phinf.naver.net/20150831_114/1441017828275ozKpm_JPEG/166755615548158_0.jpg"},
        {id:"6",store_id:"13573290",name:"목멱산방",location_name: "서울특별시 중구 퇴계로20길 71 1층 목멱산방",rating: 4,image: "http://ldb.phinf.naver.net/20190208_292/1549607629901nLwo5_JPEG/Oy8UmpFqERqgcAnWA5zOIdVE.jpg"},
        {id:"7",store_id:"11664585",name:"남포면옥",location_name: "서울특별시 중구 을지로3길 24",rating: 4,image: "http://ldb.phinf.naver.net/20190411_46/1554969319939NNIjV_JPEG/Vzidxj3qMjzebhOtCeJKXMpd.jpeg.jpg"},

      ],
    };
  },
 computed: {
    storeList: function() {
      return this.$store.state.userStoreList;
    },
    
  },
  mounted:function(){
    
  }
};
</script>
<style>
.hellloo{
  display: flex;
  justify-content: center;
}
</style>
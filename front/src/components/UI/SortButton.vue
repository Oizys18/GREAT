<template>

  <ul class="sort-elements">
    <div class="sort-wrapper">
    <li>
      <a href="#" @click="click('rating')" class="hello">
        <span class="icon-cog"></span>
        <label>별점순</label>
      </a>
    </li><br>
    <li>
      <a href="#" @click="click('random')">
        <span class="icon-cw"></span>
        <label>랜덤순</label>
      </a>
    </li><br>
    <li>
      <a href="#" @click="click('distance')">
        <span class="icon-location"></span>
        <label>거리순</label>
      </a>
    </li><br>
    <li>
      <a href="#" @click="click('bookmark')">
        <span class="icon-bookmark"></span>
        <label>북마크</label>
      </a>
    </li>
    </div>
  </ul>
</template>

<script>
import "@/assets/style/css/sortButton.css";
import GridApi from '../../apis/GridApi.js'
import BookmarkApi from '../../apis/BookmarkApi.js'
export default {
  name: "SortButton",
  data(){
    return{
      sort : ""
    };
  },
  methods: {
    click(type) {
      if(type == "bookmark"){
       var input =  prompt("북마크 이름을 설정해 주세요.");
       if(input!=null)
        this.gridBookmark(input);
      }
      else if(type=="random"||type!=this.sort){
        var x = this.$store.state.locationX;
        var y = this.$store.state.locationY;
        var categories = this.$store.state.categories;
        for (var i = 0; i < categories.length; i++) {
          var categoryName = categories[i].name;
          var categoryId = categories[i].id;
          this.apiCall(categoryId, categoryName, x, y, type);
        }
      }
    },
    apiCall(categoryId, categoryName, x, y, type) {
      var data = {
        locationX: x,
        locationY: y,
        category: categoryId
      };

      switch (type) {
        case "rating":
          this.sort="rating"
          GridApi.requestGridStoresByRating(data, response => {
            for (var i = response.length; i < 8; i++) {
              response.push({ name: "" });
            }
            this.$store.commit(categoryName, response);
          });
          break;
        case "random":
          this.sort="random";
          GridApi.requestGridStoresByRandom(data, response => {
            for (var i = response.length; i < 8; i++) {
              response.push({ name: "" });
            }
            this.$store.commit(categoryName, response);
          });
          break;
        case "distance":
          this.sort="distance"
          GridApi.requestGridStoresByDistance(data, response => {
            for (var i = response.length; i < 8; i++) {
              response.push({ name: "" });
            }
            this.$store.commit(categoryName, response);
          });
          break;
      }
    },
        gridBookmark(input) {
      this.$store.commit('setGridBookmarkList')

      var data = {
        'name': input,
        'stores': this.$store.state.gridBookmarkStoreList,
        'type': 'G',
        'user': localStorage.getItem('id')
      }

      BookmarkApi.requestGridBookmarkPost(data, response => {
        if(response == 'success') {
          alert('그리드 북마크를 등록했습니다.')
        }
      }, () => { 
        alert('그리드 북마크는 로그인 후 가능합니다.')
      })
    }
  }
};
</script>

<style>
</style>
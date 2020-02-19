import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    viewcategory:0,
    reviews: [],
    gridbookmarks:[],
    categories: [
      {id: 1, name: "한식"},
      {id: 2, name: "일식"},
      {id: 3, name: "중식"},
      {id: 4, name: "아시아"},
      {id: 5, name: "뷔페"},
      {id: 6, name: "분식"},
      {id: 7, name: "카페"},
      {id: 8, name: "기타"},
    ],
    한식: [
      {id: 1, name: "한식"},
      {id: 1, name: "한식"},
      {id: 1, name: "한식"},
      {id: 1, name: "한식"},
      {id: 1, name: "한식"},
      {id: 1, name: "한식"},
      {id: 1, name: "한식"},
      {id: 1, name: "한식"},
    ],
    중식: [
      {id: 2, name: "중식"},
      {id: 2, name: "중식"},
      {id: 2, name: "중식"},
      {id: 2, name: "중식"},
      {id: 2, name: "중식"},
      {id: 2, name: "중식"},
      {id: 2, name: "중식"},
      {id: 2, name: "중식"},
    ],
    일식: [
      {id: 3, name: "일식"},
      {id: 3, name: "일식"},
      {id: 3, name: "일식"},
      {id: 3, name: "일식"},
      {id: 3, name: "일식"},
      {id: 3, name: "일식"},
      {id: 3, name: "일식"},
      {id: 3, name: "일식"},
    ],
    아시아: [
      {id: 4, name: "아시아"},
      {id: 4, name: "아시아"},
      {id: 4, name: "아시아"},
      {id: 4, name: "아시아"},
      {id: 4, name: "아시아"},
      {id: 4, name: "아시아"},
      {id: 4, name: "아시아"},
      {id: 4, name: "아시아"}
    ],
    뷔페: [
      {id: 5, name: "뷔페"},
      {id: 5, name: "뷔페"},
      {id: 5, name: "뷔페"},
      {id: 5, name: "뷔페"},
      {id: 5, name: "뷔페"},
      {id: 5, name: "뷔페"},
      {id: 5, name: "뷔페"},
      {id: 5, name: "뷔페"},
    ],
    분식: [
      {id: 6, name: "분식"},
      {id: 6, name: "분식"},
      {id: 6, name: "분식"},
      {id: 6, name: "분식"},
      {id: 6, name: "분식"},
      {id: 6, name: "분식"},
      {id: 6, name: "분식"},
      {id: 6, name: "분식"},
    ],
    카페: [
      {id: 7, name: "카페"},
      {id: 7, name: "카페"},
      {id: 7, name: "카페"},
      {id: 7, name: "카페"},
      {id: 7, name: "카페"},
      {id: 7, name: "카페"},
      {id: 7, name: "카페"},
      {id: 7, name: "카페"},
    ],
    기타: [
      {id: 8, name: "기타"},
      {id: 8, name: "기타"},
      {id: 8, name: "기타"},
      {id: 8, name: "기타"},
      {id: 8, name: "기타"},
      {id: 8, name: "기타"},
      {id: 8, name: "기타"},
      {id: 8, name: "기타"},
    ],
    한식index: [0,1,2,3,4,5,6,7],
    중식index: [0,1,2,3,4,5,6,7],
    일식index: [0,1,2,3,4,5,6,7],
    아시아index: [0,1,2,3,4,5,6,7],
    뷔페index: [0,1,2,3,4,5,6,7],
    분식index: [0,1,2,3,4,5,6,7],
    카페index: [0,1,2,3,4,5,6,7],
    기타index: [0,1,2,3,4,5,6,7],
    한식maxIndex: 7,
    중식maxIndex: 7,
    일식maxIndex: 7,
    아시아maxIndex: 7,
    뷔페maxIndex: 7,
    분식maxIndex: 7,
    카페maxIndex: 7,
    기타maxIndex: 7,
    locationX: 127.0250186,
    locationY: 37.5056693,
    storeInfo: null,
    userInfo:null,
    userStoreList:null,
    userReviewList:null,
    reviewInfo: [],
    starRating: 0,
    bookmarkStoreList: [],
    userGridList:null,
    userGridID:null,
    gridBookmarkStoreList: [],
    categoryImageUrl: [
      "https://i.imgur.com/XIZOsMo.png",
      "https://i.imgur.com/iBTK8eT.png",
      "https://i.imgur.com/w1JOWBH.png",
      "https://i.imgur.com/gmDYKFw.png",
      "https://i.imgur.com/ZBrgtCR.png",
      "https://i.imgur.com/AVUnO3w.png",
      "https://i.imgur.com/IF2chC8.png",
      "https://i.imgur.com/6V4QzGn.png"
    ],
    profileImageUrl:[
      "https://i.imgur.com/L1i698U.jpg",
      "https://i.imgur.com/UNlLmE6.jpg",
      "https://i.imgur.com/sIXjrZh.jpg",
      "https://i.imgur.com/tC4Mrcq.jpg",
      "https://i.imgur.com/yrT1WDN.jpg",
    ],
    tabFlag:false,
  },
  mutations:{
    'reset'(state){
      state.한식index= [0,1,2,3,4,5,6,7]
      state.중식index= [0,1,2,3,4,5,6,7]
      state.일식index= [0,1,2,3,4,5,6,7]
      state.아시아index= [0,1,2,3,4,5,6,7]
      state.뷔페index= [0,1,2,3,4,5,6,7]
      state.분식index= [0,1,2,3,4,5,6,7]
      state.카페index= [0,1,2,3,4,5,6,7]
      state.기타index= [0,1,2,3,4,5,6,7]
      state.한식maxIndex=7
      state.중식maxIndex=7
      state.일식maxIndex=7
      state.아시아maxIndex=7
      state.뷔페maxIndex=7
      state.분식maxIndex=7
      state.카페maxIndex=7
      state.기타maxIndex=7
    },
    '한식'(state, payload) {
      for(var i = payload.length; i < 8; i++){
        payload.push({"name": ""})
      }
      state.한식 = payload
    },
    '일식'(state, payload) {
      for(var i = payload.length; i < 8; i++){
        payload.push({"name": ""})
      }
      state.일식 = payload
    },
    '중식'(state, payload) {
      for(var i = payload.length; i < 8; i++){
        payload.push({"name": ""})
      }
      state.중식 = payload
    },
    '아시아'(state, payload) {
      for(var i = payload.length; i < 8; i++){
        payload.push({"name": ""})
      }
      state.아시아 = payload
    },
    '뷔페'(state, payload) {
      for(var i = payload.length; i < 8; i++){
        payload.push({"name": ""})
      }
      state.뷔페 = payload
    },
    '분식'(state, payload) {
      for(var i = payload.length; i < 8; i++){
        payload.push({"name": ""})
      }
      state.분식 = payload
    },
    '카페'(state, payload) {
      for(var i = payload.length; i < 8; i++){
        payload.push({"name": ""})
      }
      state.카페 = payload
    },
    '기타'(state, payload) {
      for(var i = payload.length; i < 8; i++){
        payload.push({"name": ""})
      }
      state.기타 = payload
    },
    '한식List'(state, payload) {
      state.한식maxIndex++;
      state.한식index.splice(payload, 1, state.한식maxIndex)
    },
    '중식List'(state, payload) {
      state.중식maxIndex++;
      state.중식index.splice(payload, 1, state.중식maxIndex)
    },
    '일식List'(state, payload) {
      state.일식maxIndex++;
      state.일식index.splice(payload, 1, state.일식maxIndex)
    },
    '아시아List'(state, payload) {
      state.아시아maxIndex++;
      state.아시아index.splice(payload, 1, state.아시아maxIndex)
    },
    '뷔페List'(state, payload) {
      state.뷔페maxIndex++;
      state.뷔페index.splice(payload, 1, state.뷔페maxIndex)
    },
    '분식List'(state, payload) {
      state.분식maxIndex++;
      state.분식index.splice(payload, 1, state.분식maxIndex)
    },
    '카페List'(state, payload) {
      state.카페maxIndex++;
      state.카페index.splice(payload, 1, state.카페maxIndex)
    },
    '기타List'(state, payload) {
      state.기타maxIndex++;
      state.기타index.splice(payload, 1, state.기타maxIndex)
    },
    'userInfo'(state,payload){
      state.userInfo = payload;
    },
    'userStoreList'(state,payload){
      state.userStoreList=payload;
    },
    'userGridList'(state,payload){
      state.userGridList=payload;
    },
    'userReviewList'(state,payload){
      state.userReviewList=payload;
    },
    'addBookmarkStore'(state, payload) {
      var bookmarkList = state.bookmarkStoreList
      var bookmark = bookmarkList.find(item => {
        return item.id === payload.id
      })

      if(bookmark === undefined){
        state.bookmarkStoreList.push(payload)
      }
    },
    'deleteBookmarkStore'(state, payload) {
      var bookmarkList = state.bookmarkStoreList
      var index = bookmarkList.findIndex(item => {
        return item.id === payload
      })

      if(index !== undefined){
        state.bookmarkStoreList.splice(index, 1)
      }
    },
    'modifyGridName'(state,payload){
      var gridList = state.userGridList
      var index = gridList.findIndex(item=>{
        return item.id === payload.id
      })
      if(index !== undefined){
        state.userGridList[index].name=payload.name;
      }
    },
    'deleteGridItem'(state,payload){
      var gridList = state.userGridList
      var index = gridList.findIndex(item=>{
        return item.id === payload
      })
      if(index !== undefined){
        state.userGridList.splice(index,1)
      }
    },
    'userGridID'(state,payload){
        state.userGridID=payload
    },
    'setGridBookmarkList'(state) {
      var categoryList = state.categories
      state.gridBookmarkStoreList = []
      for(var i = 0; i < categoryList.length; i++) {
        var categoryName = categoryList[i].name
        var storeList = state[categoryName]
        var indexListName = categoryName + 'index'
        var categoryIndexList = state[indexListName]
        
        for(var j = 0; j < categoryIndexList.length; j++) {
          state.gridBookmarkStoreList.push(storeList[categoryIndexList[j]].id)
        }
      }
    }
  },
  actions: {},
  modules: {}
});

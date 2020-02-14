import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    viewcategory:0,
    reviews: [
      {name: "Kin Khao",rating :"3", contents: "Thai"},
      {name: 'Jū-Ni',rating :"2", contents: "SushiJapanese $$$$"},
      {name: 'Delfina',rating :"1", contents: "Pizza Casual"},
      {name: 'San Tung', rating :"4",contents: "Chinese  $$"},
      {name: 'Anchor Oyster Bar', rating :"3",contents: "Seafood Cioppino"},
      {name: 'Locanda',rating :"3", contents: "Italian"},
      {name: 'Garden Creamery',rating :"5", contents: "Ice cream"},
    ],
    gridbookmarks:[
      {id:'1',name:"Jason Oner",type:'G',user:'1'},
      {id:'2',name:"Travis Howard",type:'G',user:'1'},
      {id:'3',name:"Ali Connors",type:'G',user:'1'},
      {id:'4',name:"Cindy Baker",type:'G',user:'1'},
      {id:'5',name:"ABCDEFG",type:'G',user:'1'},
      {id:'6',name:"Oner",type:'G',user:'1'},
      {id:'7',name:"SSAFY",type:'G',user:'1'},
      {id:'8',name:"Vue",type:'G',user:'1'},
      {id:'9',name:"Visual Code",type:'G',user:'1'},
      {id:'10',name:"KaKao",type:'G',user:'1'},
      {id:'11',name:"QWERTDF sdfsd",type:'G',user:'1'},
    ],
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
    gridBookmarkStoreList: []
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
      state.한식 = payload
    },
    '일식'(state, payload) {
      state.일식 = payload
    },
    '중식'(state, payload) {
      state.중식 = payload
    },
    '아시아'(state, payload) {
      state.아시아 = payload
    },
    '뷔페'(state, payload) {
      state.뷔페 = payload
    },
    '분식'(state, payload) {
      state.분식 = payload
    },
    '카페'(state, payload) {
      state.카페 = payload
    },
    '기타'(state, payload) {
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
    'setGridBookmarkList'(state) {
      var categoryList = state.categories
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

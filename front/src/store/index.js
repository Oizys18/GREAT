import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    reviews: [
      {name: "Kin Khao",rating :"★★★☆☆", contents: "Thai"},
      {name: 'Jū-Ni',rating :"★★☆☆☆", contents: "SushiJapanese $$$$"},
      {name: 'Delfina',rating :"★☆☆☆", contents: "Pizza Casual"},
      {name: 'San Tung', rating :"★★★★☆",contents: "Chinese  $$"},
      {name: 'Anchor Oyster Bar', rating :"★★★☆☆",contents: "Seafood Cioppino"},
      {name: 'Locanda',rating :"★★★☆☆", contents: "Italian"},
      {name: 'Garden Creamery',rating :"★★★★★", contents: "Ice cream"},
    ],
    gridbookmarks:[
      {title:"Jason Oner",star:true},
      {title:"Travis Howard",star:false},
      {title:"Ali Connors",star:false},
      {title:"Cindy Baker",star:true},
      {title:"ABCDEFG",star:false},
      {title:"Oner",star:true},
      {title:"SSAFY",star:true},
      {title:"Vue",star:false},
      {title:"Visual Code",star:false},
      {title:"KaKao",star:true},
      {title:"QWERTDF sdfsd",star:false},
      {title:"BookMark",star:true},
      {title:"Grid",star:true},
      {title:"food",star:false},
      {title:"npm",star:false},





    ],
    categories: [
      {id: 1, name: "한식"},
      {id: 2, name: "중식"},
      {id: 3, name: "일식"},
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
      {id: 1, name: "test"}
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
  },
  mutations:{
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
  },
  actions: {},
  modules: {}
});

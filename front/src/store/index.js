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
  },
  actions: {},
  modules: {}
});

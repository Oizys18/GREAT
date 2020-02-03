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
      "한식",
      "중식",
      "일식",
      "채식",
      "육식",
      "양식",
      "베트남",
      "디저트"
    ],
    한식: [
      "곤드레밥",
      "두부밥",
      "보리밥",
      "비빔밥",
      "쌀밥",
      "덮밥",
      "컵밥",
      "약밥"
    ],
    중식: [
      "궁보계정",
      "깐쇼새우",
      "깐풍기",
      "꽃빵",
      "난자완스",
      "남경 오리 요리",
      "납팔죽",
      "동파육"
    ],
    일식: [
      "회덮밥",
      "회덮밥",
      "회덮밥",
      "회덮밥",
      "회덮밥",
      "회덮밥",
      "회덮밥",
      "회덮밥"
    ],
    채식: [
      "뻥튀기",
      "뻥튀기",
      "뻥튀기",
      "뻥튀기",
      "뻥튀기",
      "뻥튀기",
      "뻥튀기",
      "뻥튀기"
    ],
    육식: ["갈비", "갈비", "갈비", "갈비", "갈비", "갈비", "갈비", "갈비"],
    양식: [
      "스파게티",
      "스파게티",
      "스파게티",
      "스파게티",
      "스파게티",
      "스파게티",
      "스파게티",
      "스파게티"
    ],
    베트남: [
      "쌀국수",
      "쌀국수",
      "쌀국수",
      "쌀국수",
      "쌀국수",
      "쌀국수",
      "쌀국수",
      "쌀국수"
    ],
    디저트: [
      "타르트",
      "타르트",
      "타르트",
      "타르트",
      "타르트",
      "타르트",
      "타르트",
      "타르트"
    ]
  },
  actions: {},
  modules: {}
});

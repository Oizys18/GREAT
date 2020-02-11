import axios from 'axios'

/** 사용자 위치와 카테고리에 해당하는 식당 정보 요청(거리순) */
var requestGridStores = function(data, callback) {
  var x = data.locationX
  var y = data.locationY
  var category = data.category
  
  axios
  .get('http://13.124.1.176:8080/store/location/' + category + '/' + x + '/' + y)
  .then(response => {
    callback(response.data.data)
  })
}

/** 사용자 위치와 카테고리에 해당하는 식당 정보 요청(랜덤순) */

var requestGridStoresByRandom = function(data, callback) {
  axios
    .get('http://13.124.1.176:8080/store/category/' + data)
    .then(response => {
      callback(response.data.data)
    })
  }




/** 사용자 위치와 카테고리에 해당하는 식당 정보 요청(별점순) */
var requestGridStoresByRating = function(data, callback) {
  axios
    .get('http://13.124.1.176:8080/store/category/' + data)
    .then(response => {
      callback(response.data.data)
    })
  }
  
/** 식당 id에 해당하는 식당 상세 정보 요청 */
var requestStoreInfo = function(data, callback) {
  axios
    .get('http://13.124.1.176:8080/store/' + data)
    .then(response => {
      callback(response.data.data)
    })
}

export default {
  requestGridStores,
  requestStoreInfo,
  requestGridStoresByRating,
  requestGridStoresByRandom
}
import axios from 'axios'

var storage = sessionStorage

/** 사용자 위치와 카테고리에 해당하는 식당 정보 요청(거리순) */
var requestGridStoresByDistance = function(data, callback) {
  var x = data.locationX
  var y = data.locationY
  var category = data.category
  
  axios
  .get('http://13.124.1.176/store/location/' + category + '/' + x + '/' + y)
  .then(response => {
    callback(response.data.data)
  })
}

/** 사용자 위치와 카테고리에 해당하는 식당 정보 요청(랜덤순) */
var requestGridStoresByRandom = function(data, callback) {
  var x = data.locationX
  var y = data.locationY
  var category = data.category
  
  axios
  .get('http://13.124.1.176/store/rand/' + category + '/' + x + '/' + y)
  .then(response => {
    callback(response.data.data)
  })
}

/** 사용자 위치와 카테고리에 해당하는 식당 정보 요청(별점순) */
var requestGridStoresByRating = function(data, callback) {
  var x = data.locationX
  var y = data.locationY
  var category = data.category
  axios
    .get('http://13.124.1.176/store/rating/'  + category + '/' + x + '/' + y)
    .then(response => {
      callback(response.data.data)
    })
  }
  
/** 식당 id에 해당하는 식당 상세 정보 요청 */
var requestStoreInfo = function(data, callback) {
  axios
    .get('http://13.124.1.176/store/' + data)
    .then(response => {
      callback(response.data.data)
    })
}

/** 식당 id에 해당하는 리뷰 목록 요청 */
var requestReviewInfo = function(data, callback) {
  axios
    .get('http://13.124.1.176/review/store/' + data)
    .then(response => {
      callback(response.data.data)
    })
}

/** 리뷰 작성 요청 */
var requestReviewPost = function(data, callback, errorCallback) {
  axios
    .post('http://13.124.1.176/review', data, {
      headers: {
        'Authorization': storage.getItem('token')
      }
    })
    .then(response => {
      callback(response.data.data)
    })
    .catch(() => {
      errorCallback()
    })
}

/** 북마크한 식당 목록 요청 */
var requestBookmarkStoreList = function(data, callback) {
  axios
    .get('http://13.124.1.176/bookmark/storelist/' + data, {
      headers: {
        'Authorization': storage.getItem('token')
      }
    })
    .then(response => {
      callback(response.data.data)
    })
}

/** 북마크 등록 요청 */
var requestBookmarkPost = function(data, callback, errorCallback) {
  axios
    .post('http://13.124.1.176/bookmark', data, {
      headers: {
        'Authorization': storage.getItem('token')
      }
    })
    .then(response => {
      callback(response.data.data)
    })
    .catch(() => {
      errorCallback()
    })
}

/** 북마크 삭제 요청 */
var requestBookmarkDelete = function(data, callback, errorCallback) {
  axios
    .delete('http://13.124.1.176/bookmark/' 
              + data.user + '/' + data.store, {
      headers: {
        'Authorization': storage.getItem('token')
      }
    })
    .then(response => {
      callback(response.data.data)
    })
    .catch(() => {
      errorCallback()
    })
}

export default {
  requestGridStoresByDistance,
  requestStoreInfo,
  requestGridStoresByRating,
  requestReviewPost,
  requestBookmarkPost,
  requestBookmarkDelete,
  requestGridStoresByRandom,
  requestBookmarkStoreList,
  requestReviewInfo
}
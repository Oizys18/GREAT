import axios from 'axios'

var storage = sessionStorage

var requestGridBookmarkStores = function(data, callback) {
  axios
    .get('http://13.124.1.176/bookmark/' + data, {
      headers: {
        'Authorization': storage.getItem('token')
      }
    })
    .then(response => {
      callback(response.data.data)
    })
}

var requestGridBookmarkPost = function(data, callback, errorCallback) {
  axios
    .post('http://13.124.1.176/bookmark', data, {
      headers: {
        'Authorization': storage.getItem('token')
      }
    })
    .then(response => {
      callback(response.data.data)
    })
    .catch(() => errorCallback())
}

export default {
  requestGridBookmarkStores,
  requestGridBookmarkPost
}
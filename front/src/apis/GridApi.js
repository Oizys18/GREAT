import axios from 'axios'

// var storeList = new Array()
var requestGridStores = function(data, callback) {
  var x = data.locationX
  var y = data.locationY
  var category = data.category

  axios
    .get('http://localhost:8080/store/location/' + category + '/' + x + '/' + y)
    .then(response => {
      callback(response.data.data)
    })
}

export default {
  requestGridStores
}
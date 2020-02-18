import axios from 'axios'
var storage = sessionStorage
/*현재 로그인한 사용자의 회원정보 요청*/ 

// var setID=function(){
//   var email = storage.getItem('email')
//   axios
//   .get('http://13.124.1.176/user/search/'+email,{
//       headers: { Authorization : storage.getItem('token') }
//   })
//   .then(res=>{
//       storage.setItem('id',res.data.data.id);
//   })
// }


var requestUserInfo=function(callback){ 
    var id = storage.getItem('id')
    axios
        .get('http://13.124.1.176/user/'+id,{
            headers: { Authorization : storage.getItem('token') }
        })
        .then(res=>{
            callback(res.data.data);
        })
}

/*회원 정보 수정*/
var modifyUserInfo=function(data,callback){
    axios 
      .put('http://13.124.1.176/user',data,{
          headers: { Authorization : storage.getItem('token')}

      })
      .then(res=>{
        callback(res.data.data);
    })
}
/*사용자가 작성한 review list 요청 */
 var requestMyReviews=function(callback){
  
  var userID=storage.getItem('id')
  axios

  .get("http://13.124.1.176/review/search/"+userID,{
    headers: { Authorization : storage.getItem('token') }
  })
  .then(res=>{
    callback(res.data.data);
  })
 }



/*gridbookmark list 요청*/
var requestGridbookmarkList=function(callback){
  var userID=storage.getItem('id')
    axios
      .get("http://13.124.1.176/bookmark/"+userID+'/G',{
        headers: { Authorization : storage.getItem('token') }
      })
          //사용자 id에 해당하는 grid bookmarks(G)목록을 불러온다.
      .then(res=>{
        //gridbookmark목록 저장
        callback(res.data.data);
      })
}

/*gridbookmark 항목 수정*/
var modifyGridbookmark=function(data,callback){
     axios
        .put('http://13.124.1.176/bookmark'
            ,data 
            ,{
              headers:{Authorization : storage.getItem('token')}
              }
        )
        .then(res=>{
          callback(res.data.data)
        })
}
/*gridbookmark 항목 삭제*/
var deleteGridbookmark=function(data,callback){
    axios                          //bookmark id에 해당하는 bookmakr 삭제
      .delete("http://13.124.1.176/bookmark/"+data,{
        headers: { Authorization : storage.getItem('token') }
      })
      .then(res=>{
        //gridbookmark목록 저장
        callback(res.data.data)
      })
}


/*store grid list*/
var requestStorebookmarkList=function(callback){
  var userID=storage.getItem('id')  
  axios
      .get('http://13.124.1.176/bookmark/storelist/'+userID,{
        headers: { Authorization : storage.getItem('token') }
      })
          //사용자 id에 해당하는 food bookmarks목록을 불러온다.
      .then(res=>{
        callback(res.data.data)
      })
}

/* 회원 탈퇴*/ 
var deleteMember=function(callback){
  var userID=storage.getItem('id')
  axios                          //bookmark id에 해당하는 bookmakr 삭제
    .delete("http://13.124.1.176/user/"+userID,{
      headers: { Authorization : storage.getItem('token') }
    })
    .then(res=>{
      callback(res)
    })
    
}

export default{
    requestUserInfo,
    modifyUserInfo,
    requestGridbookmarkList,
    modifyGridbookmark,
    deleteGridbookmark,
    requestStorebookmarkList,
    requestMyReviews,
    // setID,
    deleteMember,

}
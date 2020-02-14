import axios from 'axios'
var storage = localStorage
/*현재 로그인한 사용자의 회원정보 요청*/ 

var setID=function(){
  var email = storage.getItem('email')
  axios
  .get('http://13.124.1.176:8080/user/search/'+email,{
      headers: { Authorization : storage.getItem('token') }
  })
  .then(res=>{
      console.log(res.data.data)
      storage.setItem('id',res.data.data.id);
  })
}


var requestUserInfo=function(callback){ //data:사용자 email
    var email = storage.getItem('email')
    console.log('로그인한 email : '+email)
    axios
        .get('http://13.124.1.176:8080/user/search/'+email,{
            headers: { Authorization : storage.getItem('token') }
        })
        .then(res=>{
            callback(res.data.data);
        })
}

/*회원 정보 수정*/
var modifyUserInfo=function(data){
  console.log('수정된 user data 토큰:'+storage.getItem('token'))
    axios 
      .put('http://13.124.1.176:8080/user',data,{
          headers: { Authorization : storage.getItem('token')}
      })
      .then(res=>{
        console.log('수정후 결과 : '+res);
      })
}

/*사용자가 작성한 review list 요청 */
 var requestMyReviews=function(callback){
  
  var userID=storage.getItem('id')
  console.log(userID)
  axios
  // .get("http://13.124.1.176:8080/review/store/566",{
  // .get("http://13.124.1.176:8080/review/search/"+userID,{
  // .get("http://13.124.1.176:8080/review/store/566",{

  .get("http://13.124.1.176:8080/review/search/"+userID,{
    headers: { Authorization : storage.getItem('token') }
  })
  .then(res=>{
    //gridbookmark목록 저장
    callback(res.data.data);
    console.log("axios_myreview 리스트")
    console.log(res.data.data)
  })
 }



/*gridbookmark list 요청*/
var requestGridbookmarkList=function(callback){
  //var userID=storage.getItem('id')
  //console.log("user id :"+userID)
    axios
      .get("http://13.124.1.176:8080/bookmark/"+2+'/'+'G',{
        headers: { Authorization : storage.getItem('token') }
      })
          //사용자 id에 해당하는 grid bookmarks(G)목록을 불러온다.
      
      .then(res=>{
        //gridbookmark목록 저장
        callback(res.data.data);
        console.log("axios_myreview 리스트")
        console.log(res.data.data)
      })
}
/*gridbookmark 항목 수정*/
var modifyGridbookmark=function(data){
     axios
        .put('http://13.124.1.176:8080/bookmark'
            ,{params: {user: data} //data(bookmark 타입)
            ,headers:{
                Authorization : storage.getItem('token')
            }
        })
        .then(res=>{
            console.log(res);
        })
}
/*gridbookmark 항목 삭제*/
var deleteGridbookmark=function(data){
    axios                          //bookmark id에 해당하는 bookmakr 삭제
      .delete("http://13.124.1.176:8080/bookmark/"+data,{
        headers: { Authorization : storage.getItem('token') }
      }
        
      )
      .then(res=>{
        //gridbookmark목록 저장
        console.log(res);
      })
}


/*foodgrid list*/
var requestStorebookmarkList=function(callback){
  var userID=storage.getItem('id')  
  axios
      .get('http://13.124.1.176:8080/bookmark/storelist/'+userID,{
        headers: { Authorization : storage.getItem('token') }
      })
          //사용자 id에 해당하는 food bookmarks(F)목록을 불러온다.
      .then(res=>{
        console.log(res.data.data)
        callback(res.data.data)
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
    setID,

}
import axios from 'axios'
var storage = localStorage
/*현재 로그인한 사용자의 회원정보 요청*/ 
var requestUserInfo=function(data,callback){
    axios
        .get('http://13.124.1.176:8080/user/'+data,{
            headers: { Authorization : storage.getItem('token') }
        })
        .then(res=>{
            callback(res.data.data);
            console.log(res.data.data)
        })
}

/*회원 정보 수정*/
var modifyUserInfo=function(data){
    axios
        .put('http://13.124.1.176:8080/user',{
            params: {user: data.user
            },
            headers:{
                Authorization : storage.getItem('token')
            }
        })
        .then(res=>{
            console.log(res);
        })
}

/*gridbookmark list 요청*/
var requestGridbookmarkList=function(data,callback){
    axios
      .get("http://13.124.1.176:8080/bookmark/"+data.id+'/'+'G',{
        headers: { Authorization : storage.getItem('token') }
      })
          //사용자 id에 해당하는 grid bookmarks(G)목록을 불러온다.
      
      .then(res=>{
        //gridbookmark목록 저장
        callback(res.data.data);
        console.log(res.data.data)
      })
}
/*gridbookmark 항목 수정*/
var modifyGridbookmark=function(data){
     axios
        .put('http://13.124.1.176:8080/bookmark'
            ,{params: {user: data.bookmark}
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
    axios
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
var requestFoodbookmarkList=function(data,callback){
    axios
      .get("http://13.124.1.176:8080/bookmark/'+'1'+'/'+'F'",{
        headers: { Authorization : storage.getItem('token') }
      })
          //사용자 id에 해당하는 food bookmarks(F)목록을 불러온다.
      
      .then(res=>{
        //gridbookmark목록 저장
        callback(res.data.data);
        console.log(res.data.data)

      })
}

export default{
    requestUserInfo,
    modifyUserInfo,
    requestGridbookmarkList,
    modifyGridbookmark,
    deleteGridbookmark,
    requestFoodbookmarkList

}
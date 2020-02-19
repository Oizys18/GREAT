import axios from 'axios'
const Kakao = window.Kakao

Kakao.init('38f6f12924a67d6a88321b717e55747c');
var res = null;

const loginWithKakao = async () => {
    // 로그인 창을 띄웁니다.

    const aToken = await Kakao.Auth.login({
        success: function (authObj) {
            console.log(authObj["access_token"])
            console.log(authObj["refresh_token"])
            if (sessionStorage.getItem('error') == 'access'){
                res = requestKakao()
            }
            return aToken;
        },
        fail: function (err) {
            alert(JSON.stringify(err));
        }
    }).then(response => {
        console.log(response)
        res = requestKakao();
    }).catch(err => {
        console.log(err)
    }
        
    );

    

    return await axios.post("http://13.124.1.176/user/socialLogin", JSON.stringify(res["id"]))
        .then(response => {
            sessionStorage.setItem('sns_token', JSON.stringify(res["id"]));
            sessionStorage.setItem('email', JSON.stringify(res["id"]));
            sessionStorage.setItem('social_data', response.data.data.data);
            if (sessionStorage.getItem('social_data') == "success")
                sessionStorage.setItem("token", response.data.data.Authorization);
            return response.data.data.Authorization;
        })
}

const requestKakao = async () => {
    return await Kakao.API.request({
        url: '/v2/user/me',

        success: function (res) {
            console.log(JSON.stringify(res["id"]));
            console.log(JSON.stringify(res["properties"]["nickname"]));
            return res

        },
        fail: function (error) {
            sessionStorage.setItem('error', 'access');
            console.log(JSON.stringify(error));
        }
    });
}
const KakaoApi = {
    loginWithKakao: () => loginWithKakao(),
    requestKakao: () => requestKakao()
}

export default KakaoApi

//original code : callback
// const loginWithKakao = (success1, fail) => {
//     // 로그인 창을 띄웁니다.
//     Kakao.Auth.login({
//         success: function (authObj) {
//             console.log(authObj["access_token"])
//             console.log(authObj["refresh_token"])

//             Kakao.API.request({
//                 url: '/v2/user/me',

//                 success: function (res) {
//                     console.log(JSON.stringify(res["id"]));
//                     console.log(JSON.stringify(res["properties"]["nickname"]));
//                     console.log("11시다")

//                     axios.post("http://13.124.1.176/user/socialLogin", JSON.stringify(res["id"]))
//                         .then(response=>{
//                             sessionStorage.setItem('sns_token',JSON.stringify(res["id"]));
//                             sessionStorage.setItem('social_data',response.data.data.data);
//                             console.log("kakaoapi social data", response.data);
//                             console.log("d", response.data.data.data);

//                             success1(response.data.data.Authorization)
//                         })
//                 },
//                 fail: function (error) {
//                     console.log(JSON.stringify(error));
//                     fail(error)
//                 }
//             });
//         },
//         fail: function (err) {
//             alert(JSON.stringify(err));
//             fail(err)
//         }
//     });
// }
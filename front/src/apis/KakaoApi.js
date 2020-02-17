import axios from 'axios'
const Kakao = window.Kakao

Kakao.init('38f6f12924a67d6a88321b717e55747c');
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

//                     axios.post("http://13.124.1.176:8080/user/socialLogin", JSON.stringify(res["id"]))
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

const loginWithKakao = async () => {
    // 로그인 창을 띄웁니다.
    await Kakao.Auth.login({
        success: function (authObj) {
            console.log(authObj["access_token"])
            console.log(authObj["refresh_token"])
        },
        fail: function (err) {
            alert(JSON.stringify(err));
        }
    });

    const res = await Kakao.API.request({
        url: '/v2/user/me',

        success: function (res) {
            console.log(JSON.stringify(res["id"]));
            console.log(JSON.stringify(res["properties"]["nickname"]));
            console.log("11시다")
            return res
            
        },
        fail: function (error) {
            console.log(JSON.stringify(error));
        }
    });
    
    return await axios.post("http://13.124.1.176:8080/user/socialLogin", JSON.stringify(res["id"]))
                .then(response=>{
                    sessionStorage.setItem('sns_token',JSON.stringify(res["id"]));
                    sessionStorage.setItem('social_data',response.data.data.data);
                    console.log("kakaoapi social data", response.data);
                    console.log("d", response.data.data.data);
                    return response.data.data.Authorization;
                })
}


const KakaoApi = {
    loginWithKakao: () => loginWithKakao()
}

export default KakaoApi
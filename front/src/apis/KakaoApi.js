import axios from 'axios'
const Kakao = window.Kakao

Kakao.init('38f6f12924a67d6a88321b717e55747c');
const loginWithKakao = () => {
    // 로그인 창을 띄웁니다.
    Kakao.Auth.login({
        success: function (authObj) {
            console.log(authObj["access_token"])
            console.log(authObj["refresh_token"])
            Kakao.API.request({
                url: '/v2/user/me',

                success: function (res) {
                    console.log(JSON.stringify(res["id"]));
                    console.log(JSON.stringify(res["properties"]["nickname"]));
                    return axios.post("http://13.124.1.176:8080/user/socialLogin", JSON.stringify(res["id"]))
                        .then(response=>{
                            localStorage.setItem('sns_token',JSON.stringify(res["id"]));
                            localStorage.setItem('social_data',response.data.data.data);
                            console.log("kakaoapi social data", response.data);
                            console.log("d", response.data.data.data);
                        })
                },
                fail: function (error) {
                    console.log(JSON.stringify(error));
                }
            });
        },
        fail: function (err) {
            alert(JSON.stringify(err));
        }
    });
}

const KakaoApi = {
    loginWithKakao: () => loginWithKakao()
}

export default KakaoApi
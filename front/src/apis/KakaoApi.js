import axios from 'axios'
import UserApi from './UserApi'
const Kakao = window.Kakao

Kakao.init('38f6f12924a67d6a88321b717e55747c');

const KakaoApi = {
    loginWithKakao: () => loginWithKakao()
}

export default KakaoApi

// original code : callback
const loginWithKakao = (success1, fail) => {
    // 로그인 창을 띄웁니다.
    Kakao.Auth.login({
        success: function (authObj) {
            console.log(authObj["access_token"])
            console.log(authObj["refresh_token"])

            Kakao.API.request({
                url: '/v2/user/me',

                success: function (res) {
                    axios.post("http://13.124.1.176/user/socialLogin", JSON.stringify(res["id"]))
                        .then(response => {
                            sessionStorage.setItem('sns_token', JSON.stringify(res["id"]));
                            sessionStorage.setItem('email', JSON.stringify(res["id"]));
                            sessionStorage.setItem('social_data', response.data.data.data);
                            var msg = response.data.data.data;
                            if (msg != "success") {
                                window.location.href = "/socialjoin";
                            } else {
                                sessionStorage.setItem("token", response.data.data.Authorization);
                                UserApi.getID(res => {
                                    console.log(res);
                                }).then(
                                    window.location.href = "/main"
                                );
                            }
                        })
                },
                fail: function (error) {
                    console.log(JSON.stringify(error));
                    fail(error)
                }
            });
        },
        fail: function (err) {
            alert(JSON.stringify(err));
            fail(err)
        }
    });
}
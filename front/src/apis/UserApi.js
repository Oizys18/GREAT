/*
 User API 예시
 */
import axios from 'axios'



const requestLogin = (loginID, loginPW,callback,errorCallback) => {// eslint-disable-line no-unused-vars
    //백앤드와 로그인 통신하는 부분
    let loginData = new Map();
    loginData.set('email', loginID);
    loginData.set('password', loginPW);
    return axios.post('http://localhost:8081/user/login',{
        loginData: loginData
    }).then(
        res => {
            console.log(res);
            this.$router.push("/");
        }
    )

}

export const checkEmailExists = (email) => axios.get('/user/email/' + email);

export const localRegister = ({email, username, password}) => axios.post('/user/join', { email, username, password });
export const localLogin = ({email, password}) => axios.post('/user/login', { email, password });

export const logout = () => axios.post('/api/auth/logout');


const UserApi = {
    requestLogin:(data,callback,errorCallback)=>requestLogin(data,callback,errorCallback)
}

export default UserApi
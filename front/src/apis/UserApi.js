/*
 User API 예시
 */
import axios from 'axios'


const emailCheck = (email) => {
	return axios.get('http://13.124.1.176:8080/user/email/' + email)
		.then(
			res => {
				console.log(res);
			}
		)
}


const emailAuth = (email) => {
	return axios.get('http://13.124.1.176:8080/sendemail/' + email)
		.then(
			res => {
				console.log(res);
			}
		)
}

const requestLogin = (loginID, loginPW, callback, errorCallback) => { // eslint-disable-line no-unused-vars
	return axios.post('http://13.124.1.176:8080/user/login', {
			email: loginID,
			password: loginPW
		})
		.then(
			res => {
				console.log(res);
			}
		)
};
const requestRegister = (email, username, password, birth, gender) => {
	//"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJHcmVhdCIsImV4cCI6MTU4MDc5NTMxMn0.Sj6X08VPilE7biAakAURdVIGW4ZaUyLBFH24NgOctMU"
	return axios.post('http://13.124.1.176:8080/user/join', {
			email: email,
			password: password,
			sns_token: null,
			birth: birth,
			gender: gender,
			name: username
		})
		.then(
			res => {
				console.log(res);
			}
		)
};


export const logout = () => axios.post('/api/auth/logout');


const UserApi = {
	emailAuth: (email) => emailAuth(email),
	emailCheck: (email) => emailCheck(email),
	requestLogin: (data, callback, errorCallback) => requestLogin(data, callback, errorCallback),
	requestRegister: (email, username, password, birth, gender) => requestRegister(email, username, password, birth, gender)
}

export default UserApi
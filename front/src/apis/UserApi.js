/*
 User API 예시
 */
import axios from 'axios'

var storage = localStorage;
var session = sessionStorage;

const emailCheck = (email) => {
	var emailRes = axios.get('http://13.124.1.176:8080/user/email/' + email)
		.then(
			res => {
				console.log(res);
			}
		)
	return emailRes.data;
}


const emailAuth = (email) => {
	return axios.get('http://13.124.1.176:8080/sendemail/' + email)
		.then(
			res => {
				session.setItem('emailAuth',res.data.data)
			}
		)
}

const requestToken = () => {
	console.log('token', storage.getItem('token'))
	return axios.get('http://13.124.1.176:8080/user',{
		headers: { 'Authorization' : storage.getItem('token') }
       })
	.then(
		res => { // eslint-disable-line no-unused-vars
		}
	)
}

const requestLogin = (remID, loginID, loginPW, callback, errorCallback) => { // eslint-disable-line no-unused-vars
	storage.setItem('email', loginID);
	// else session.setItem('email',loginID);
	return axios.post('http://13.124.1.176:8080/user/login', {
			email: loginID,
			password: loginPW
		})
		.then(
			res => {
				storage.setItem('id', res.data.data.Info.id)
				storage.setItem('token', res.data.data.Authorization);
			}
		)
};

const requestLogout = () => {
	storage.setItem('id', null);
	storage.setItem('email', null); //신비 추가 
	storage.setItem('token', null);
	return storage.getItem('token');
};

const requestSocialRegister = (username, sns_token, birth, gender) => {
	return axios.post('http://13.124.1.176:8080/user/join', {
			email: null,
			password: null,
			sns_token: sns_token,
			birth: birth,
			gender: gender,
			name: username
		})
		.then(
			res => {
				storage.setItem('token', res.data.data.Authorization);
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
				storage.setItem('token', res.data.data.Authorization);
			}
		)
};


const UserApi = {
	requestToken: () => requestToken(),
	emailAuth: (email) => emailAuth(email),
	emailCheck: (email) => emailCheck(email),
	requestLogout: () => requestLogout(),
	requestLogin: (data, callback, errorCallback) => requestLogin(data, callback, errorCallback),
	requestSocialRegister: (username, sns_token, birth, gender) => requestSocialRegister(username, sns_token, birth, gender),
	requestRegister: (email, username, password, birth, gender) => requestRegister(email, username, password, birth, gender)
}

export default UserApi
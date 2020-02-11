/*
 User API 예시
 */
import axios from 'axios'

var storage = localStorage;

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
				console.log(res);
			}
		)
}

const requestToken = () => {
	console.log('token', storage.getItem('token'))
	return axios.get('http://70.12.246.123:8080/user',{
		headers: { 'Authorization' : storage.getItem('token') }
       })
	.then(
		res => { // eslint-disable-line no-unused-vars
			console.log(storage.getItem('token'));
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
				storage.setItem('email',loginID);
				storage.setItem('token', res.data.data.Authorization);
				console.log('login', storage.getItem('token'))
			}
		)
};

const requestLogout = () => {
	storage.setItem('token', null);
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
				console.log(res);
			}
		)
};


const UserApi = {
	requestToken: () => requestToken(),
	emailAuth: (email) => emailAuth(email),
	emailCheck: (email) => emailCheck(email),
	requestLogout: () => requestLogout(),
	requestLogin: (data, callback, errorCallback) => requestLogin(data, callback, errorCallback),
	requestRegister: (email, username, password, birth, gender) => requestRegister(email, username, password, birth, gender)
}

export default UserApi
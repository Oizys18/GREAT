/*
 User API 예시
 */
import axios from 'axios'

var storage = localStorage;

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

const requestToken = () => {
	return storage.getItem('token');
}

const requestLogin = (loginID, loginPW, callback, errorCallback) => { // eslint-disable-line no-unused-vars
	return axios.post('http://13.124.1.176:8080/user/login', {
			email: loginID,
			password: loginPW
		})
		.then(
			res => {
				console.log(res);
				storage.setItem('token', res.data.data.Authorization);
				console.log(storage.getItem('token'))
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
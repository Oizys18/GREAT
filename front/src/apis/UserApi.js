/*
 User API 예시
 */
import axios from 'axios'


const emailCheck = (email) => {
	return axios.get('http://13.124.1.176:8080/sendemail/'+email)
	.then(
		res => {
			console.log(res);
		}
	)
}


const emailAuth = (email) => {
	return axios.get('http://13.124.1.176:8080/user/email/'+email)
	.then(
		res => {
			console.log(res);
		}
	)
}

const requestLogin = (loginID, loginPW, callback, errorCallback) => { // eslint-disable-line no-unused-vars
	//백앤드와 로그인 통신하는 부분
	let loginData = new Map();
	loginData.set('email', loginID);
	loginData.set('password', loginPW);
	return axios.post('http://13.124.1.176:8080/user/login', loginData)
		.then(
			res => {
				console.log(res);
			}
		)

}
const requestRegister = (email, username, password, birth, gender) => {
	let joinData = {
		email: email,
		name: username,
		password: password,
		birth: birth,
		gender: gender
	};
	axios.post('http://13.124.1.176:8080/user/join', joinData)
	.then(
		res => {
			console.log(res);
		}
	)
};

export const checkEmailExists = (email) => axios.get('/user/email/' + email);

export const logout = () => axios.post('/api/auth/logout');


const UserApi = {
	emailAuth: (email) => emailAuth(email),
	emailCheck: (email) => emailCheck(email),
	requestLogin: (data, callback, errorCallback) => requestLogin(data, callback, errorCallback),
	requestRegister: (email, username, password, birth, gender) => requestRegister(email, username, password, birth, gender)
}

export default UserApi
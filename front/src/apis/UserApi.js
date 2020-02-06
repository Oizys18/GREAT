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
	let loginData = new Map();
	loginData.set('email', loginID);
	loginData.set('password', loginPW);
	const response = axios.post('http://13.124.1.176:8080/user/login', loginData)
		.then(
			res => {
				console.log(res);
			}
		)
	return response.Authorization;
}
const requestRegister = (email, username, password, birth, gender) => {
	// var birthDate = new Pikaday({
	// 	field: birth,
	// 	format: 'yyyy-MM-dd',
	// 	toString(date, format){
	// 		let day = ("0" + date.getDate()).slice(-2);
	// 		let month = ("0" + (date.getMonth() + 1)).slice(-2);
	// 		let year = date.getFullYear();
	// 		return `${year}-${month}-${day}`;
	// 	}
	// });
	axios.post('http://13.124.1.176:8080/user/join', {
			params: {
				email: email,
				name: username,
				password: password,
				birth: birth,
				gender: gender
			}
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
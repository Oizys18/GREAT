/*
 User API 예시
 */
import axios from 'axios'



const requestLogin = (loginID, loginPW, callback, errorCallback) => { // eslint-disable-line no-unused-vars
	//백앤드와 로그인 통신하는 부분
	let loginData = new Map();
	loginData.set('email', loginID);
	loginData.set('password', loginPW);
	return axios.post('http://localhost:8080/user/login', loginData)
		.then(
			res => {
				console.log(res);
				this.$router.push("/");
			}
		)

}
export const requestRegister = (email, username, password, birth, gender) => {
	let joinData = {
		email: email,
		name: username,
		password: password,
		birth: birth,
		gender: gender
	};
	axios.post('http://localhost:8080/user/join', joinData)
	.then(
		res => {
			console.log(res);
			this.$router.push("/");
		}
	)
};

export const checkEmailExists = (email) => axios.get('/user/email/' + email);

export const logout = () => axios.post('/api/auth/logout');


const UserApi = {
	requestLogin: (data, callback, errorCallback) => requestLogin(data, callback, errorCallback)
}

export default UserApi
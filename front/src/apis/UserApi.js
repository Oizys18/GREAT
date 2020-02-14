import axios from 'axios'

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
	var token = session.getItem('token');
	return axios.get('http://70.12.246.123:8080/user', {
			headers: {
				'Authorization': token
			}
		})
		.then(
			res => { // eslint-disable-line no-unused-vars
				console.log(session.getItem('token'));
			}
		)
}

const requestLogin = (loginID, loginPW, callback, errorCallback) => { // eslint-disable-line no-unused-vars
	session.setItem('email',loginID);
	return axios.post('http://13.124.1.176:8080/user/login', {
			email: loginID,
			password: loginPW
		})
		.then(
			res => {
				session.setItem('token', res.data.data.Authorization);
			}
		)
};

const requestLogout = () => {
	session.setItem('id', null);
	session.setItem('email', null);
	session.setItem('token', null);
	return session.getItem('token');
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
				session.setItem('token', res.data.data.Authorization);
					
				console.log(res);
			}
		)
};
const requestRegister = (email, username, password, birth, gender) => {
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
				session.setItem('token', res.data.data.Authorization);
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
	requestSocialRegister: (username, sns_token, birth, gender) => requestSocialRegister(username, sns_token, birth, gender),
	requestRegister: (email, username, password, birth, gender) => requestRegister(email, username, password, birth, gender)
}

export default UserApi
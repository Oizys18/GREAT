import axios from 'axios'

var session = sessionStorage;

const emailCheck = (email) => {
	var emailRes = axios.get('http://13.124.1.176/user/email/' + email)
		.then(
			res => {
				console.log(res);
			}
		)
	return emailRes.data;
}


const emailAuth = (email) => {
	return axios.get('http://13.124.1.176/sendemail/' + email)
		.then(
			res => {
				session.setItem('emailAuth', res.data.data)
			}
		)
}

const getID = () => {
	var email = session.getItem('email');
	return axios.get('http://13.124.1.176/user/search/'+email,{
		headers: { Authorization : session.getItem('token') }
	}).then(
		res=> {
			session.setItem("id",res.data.data.id);
		}
	)
}
const requestLogin = (loginID, loginPW, callback, errorCallback) => { // eslint-disable-line no-unused-vars
	session.setItem('email', loginID);
	return axios.post('http://13.124.1.176/user/login', {
			email: loginID,
			password: loginPW
		})
		.then(
			res => {
				if (res.data.data != "not success") {
					session.setItem('token', res.data.data.Authorization);
					session.setItem('id', res.data.data.Info.id)
				}

			}
		)
};

const requestLogout = () => {
	session.setItem('id', null);
	session.setItem('email', null);
	session.setItem('token', null);
	this.$store.commit('userInfo', null);
	return session.getItem('token');
};

const requestSocialRegister = (username, sns_token, birth, gender) => {
	return axios.post('http://13.124.1.176/user/join', {
			email: sns_token,
			password: null,
			sns_token: sns_token,
			birth: birth,
			gender: gender,
			name: username
		})
		.then(
			res => {
				session.setItem('token', res.data.data.Authorization);
			}
		)
};
const requestRegister = (email, username, password, birth, gender) => {
	return axios.post('http://13.124.1.176/user/join', {
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
			}
		)
};


const UserApi = {
	// requestToken: () => requestToken(),
	getID: () => getID(),
	emailAuth: (email) => emailAuth(email),
	emailCheck: (email) => emailCheck(email),
	requestLogout: () => requestLogout(),
	requestLogin: (data, callback, errorCallback) => requestLogin(data, callback, errorCallback),
	requestSocialRegister: (username, sns_token, birth, gender) => requestSocialRegister(username, sns_token, birth, gender),
	requestRegister: (email, username, password, birth, gender) => requestRegister(email, username, password, birth, gender)
}

export default UserApi

// const requestToken = () => {
// 	var token = session.getItem('token');
// 	return axios.get('http://70.12.246.123/user', {
// 			headers: {
// 				'Authorization': token
// 			}
// 		})
// 		.then(
// 			res => { // eslint-disable-line no-unused-vars
// 				console.log(session.getItem('token'));
// 			}
// 		)
// }
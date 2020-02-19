package com.ssafy.great.model.service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ssafy.great.dto.User;
import com.ssafy.great.model.dao.UserDao;

@Service
public class UserServiceImpl implements UserService{
	@Autowired
	private UserDao dao;
	
	/** 모든 사용자 목록 검색 */
	public List<User> searchAll(){
		return dao.selectAll();
	}
	
	/** 사용자 id에 해당하는 사용자 검색  */
	public User searchById(int id) {
		return dao.selectById(id);
	}
	
	/** email 중복 체크 
	 * 	중복된 이메일이 있으면 return false
	 *  중복된 이메일이 없으면 return true
	 */
	public boolean emailCheck(String email) {
		User user = dao.selectByEmail(email);
		if(user == null) return true;
		return false;
	}
	
	/** 사용자 로그인
	 *  로그인 성공하면 return true
	 *  로그인 실패하면 return false
	 */
	public boolean login(Map<String, String> loginData) {
		User result = dao.login(loginData);
		if(result == null) return false;
		return true;
	}
	
	
	/** 소셜사용자 로그인
	 *  로그인 성공하면 return true
	 *  로그인 실패하면 return false
	 */
	public boolean socialLogin(String sns_token) {
		User result = dao.socialLogin(sns_token);
		if(result == null) return false;
		return true;
	}
	
	
	/** 회원가입 */
	public void join(User user) {
		dao.insert(user);
	}
	
	/** 사용자 정보 수정 */
	public void updateUser(User user) {
		dao.update(user);
	}
	
	/** 회원 탈퇴 */
	public void deleteUser(int id) {
		dao.delete(id);
	}

	@Override
	public User selectByEmail(String email) {
		// TODO Auto-generated method stub
		return dao.selectByEmail(email);
	}
}
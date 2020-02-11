package com.ssafy.great.model.service;

import java.util.List;
import java.util.Map;

import com.ssafy.great.dto.User;

public interface UserService {

	/** 모든 사용자 목록 검색 */
	List<User> searchAll();

	/** 사용자 id에 해당하는 사용자 검색  */
	User searchById(int id);
	
	/** 사용자 email에 해당하는 사용자 검색  */
	User selectByEmail(String email);
	
	/** email 중복 체크 
	 * 	중복된 이메일이 있으면 return false
	 *  중복된 이메일이 없으면 return true
	 */
	boolean emailCheck(String email);

	/** 사용자 로그인
	 *  로그인 성공하면 return true
	 *  로그인 실패하면 return false
	 */
	boolean login(Map<String, String> loginData);
	
	/** 소셜 사용자 로그인
	 *  로그인 성공하면 return true
	 *  로그인 실패하면 return false
	 */
	boolean socialLogin(String sns_token);

	/** 회원가입 */
	void join(User user);

	/** 사용자 정보 수정 */
	void updateUser(User user);

	/** 회원 탈퇴 */
	void deleteUser(int id);

}
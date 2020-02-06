package com.ssafy.great.model.dao;

import java.util.List;
import java.util.Map;

import com.ssafy.great.dto.User;

public interface UserDao {

	/** 모든 사용자 목록 검색 */
	List<User> selectAll();

	/** 사용자 id에 해당하는 사용자 검색 */
	User selectById(int id);

	/** 사용자 email에 해당하는 사용자 검색 */
	User selectByEmail(String email);

	/** email과 password가 일치하는 사용자 검색 */
	User login(Map<String, String> loginData);
	
	/** sns_token 일치하는 사용자 검색 */
	User socialLogin(String sns_token);

	/** 사용자 정보 등록 */
	void insert(User user);

	/** 사용자 정보 수정 */
	void update(User user);

	/** 사용자 정보 삭제 */
	void delete(int id);

}
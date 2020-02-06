package com.ssafy.great.model.dao;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.ssafy.great.dto.User;

@Repository
public class UserDaoImpl implements UserDao{
    @Autowired
    private SqlSession session;

    /** 모든 사용자 목록 검색 */
    public List<User> selectAll(){
        return session.selectList("sql.user.selectAll");
    }

    /** 사용자 id에 해당하는 사용자 검색 */
    public User selectById(int id){
        return session.selectOne("sql.user.selectById", id);
    }

    /** 사용자 email에 해당하는 사용자 검색 */
    public User selectByEmail(String email){
        return session.selectOne("sql.user.selectByEmail", email);
    }

    /** email과 password가 일치하는 사용자 검색 */
    public User login(Map<String, String> loginData){
        return session.selectOne("sql.user.login", loginData);
    }
    
    /** email과 password가 일치하는 사용자 검색 */
    public User socialLogin(String sns_token){
    	return session.selectOne("sql.user.socialLogin", sns_token);
    }

    /** 사용자 정보 등록 */
    public void insert(User user){
        session.insert("sql.user.insert", user);
    }

    /** 사용자 정보 수정 */
    public void update(User user){
        session.update("sql.user.update", user);
    }

    /** 사용자 정보 삭제 */
    public void delete(int id){
        session.delete("sql.user.delete", id);
    }
}
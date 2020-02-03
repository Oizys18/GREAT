package com.ssafy.great.model.dao;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class CategoryDaoImpl implements CategoryDao {
	@Autowired
	private SqlSession session;
	
	/** 모든 카테고리 목록 검색 */
	public List<String> selectAll(){
		return session.selectList("sql.category.selectAll");
	}
	
	/** 카테고리 등록 */
	public void insert(String name) {
		session.insert("sql.category.insert", name);
	}
}

package com.ssafy.great.model.dao;

import java.util.List;

public interface CategoryDao {

	/** 모든 카테고리 목록 검색 */
	List<String> selectAll();

	/** 카테고리 등록 */
	void insert(String name);

}
package com.ssafy.great.model.service;

import java.util.List;

public interface CategoryService {

	/** 모든 카테고리 목록 검색 */
	List<String> searchAll();

	/** 카테고리 등록 */
	void insertCategory(String name);

}
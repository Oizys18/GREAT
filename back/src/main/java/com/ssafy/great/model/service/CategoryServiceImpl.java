package com.ssafy.great.model.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ssafy.great.model.dao.CategoryDao;

@Service
public class CategoryServiceImpl implements CategoryService {
	@Autowired
	private CategoryDao dao;
	
	/** 모든 카테고리 목록 검색 */
	public List<String> searchAll(){
		return dao.selectAll();
	}
	
	/** 카테고리 등록 */
	public void insertCategory(String name) {
		dao.insert(name);
	}
}

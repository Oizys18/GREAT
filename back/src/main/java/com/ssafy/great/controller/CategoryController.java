package com.ssafy.great.controller;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.ssafy.great.model.service.CategoryService;
import com.ssafy.great.util.RestUtil;

import io.swagger.annotations.ApiOperation;

@CrossOrigin(origins= {"*"}, maxAge=6000)
@RestController
public class CategoryController {
	@Autowired
	private CategoryService service;
	
	@GetMapping("/category")
	@ApiOperation("모든 카테고리 목록 검색")
	public ResponseEntity<Map<String,Object>> searchAll(){
		return RestUtil.handleSuccess(service.searchAll());
	}
	
	@PostMapping("/category")
	@ApiOperation("카테고리 등록")
	public ResponseEntity<Map<String,Object>> postCategory(@RequestBody String category){
		service.insertCategory(category);
		return RestUtil.handleSuccess("success");
	}
}

package com.ssafy.great.controller;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.ssafy.great.dto.Review;
import com.ssafy.great.model.service.ReviewService;
import com.ssafy.great.util.RestUtil;

import io.swagger.annotations.ApiOperation;

@CrossOrigin(origins= {"*"}, maxAge=6000)
@RestController
public class ReviewController {
	@Autowired
	private ReviewService service;
	
	@GetMapping("/review")
	@ApiOperation("모든 리뷰 목록 검색")
	public ResponseEntity<Map<String,Object>> searchAll(){
		return RestUtil.handleSuccess(service.searchAll());
	}
	
	@GetMapping("/review/search/{userId}")
	@ApiOperation("사용자가 쓴 리뷰 목록 검색")
	public ResponseEntity<Map<String,Object>> searchByUserId(@PathVariable int userId){
		return RestUtil.handleSuccess(service.selectByUserId(userId));
	}
	
	@GetMapping("/review/{id}")
	@ApiOperation("리뷰 id에 해당하는 리뷰 검색")
	public ResponseEntity<Map<String,Object>> searchById(@PathVariable int id){
		return RestUtil.handleSuccess(service.searchById(id));
	}
	
	@GetMapping("/review/store/{store}")
	@ApiOperation("식당 id에 해당하는 리뷰 목록 검색")
	public ResponseEntity<Map<String,Object>> searchByStore(@PathVariable int store){
		return RestUtil.handleSuccess(service.searchByStore(store));
	}
	
	@PostMapping("/review")
	@ApiOperation("리뷰 정보 등록")
	public ResponseEntity<Map<String,Object>> postReview(@RequestBody Review review){
		System.out.println(review);
		service.insertReview(review);
		return RestUtil.handleSuccess("success");
	}
	
	@PutMapping("/review")
	@ApiOperation("리뷰 정보 수정")
	public ResponseEntity<Map<String,Object>> putReview(@RequestBody Review review){
		service.updateReview(review);
		return RestUtil.handleSuccess("success");
	}
	
	@DeleteMapping("/review/{id}")
	@ApiOperation("리뷰 id에 해당하는 리뷰 정보 삭제")
	public ResponseEntity<Map<String,Object>> deleteReview(@PathVariable int id){
		service.deleteReview(id);
		return RestUtil.handleSuccess("success");
	}
}

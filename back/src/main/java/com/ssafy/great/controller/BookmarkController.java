package com.ssafy.great.controller;

import java.util.HashMap;
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

import com.ssafy.great.dto.Bookmark;
import com.ssafy.great.model.service.BookmarkService;
import com.ssafy.great.util.RestUtil;

import io.swagger.annotations.ApiOperation;

@CrossOrigin(origins= {"*"}, maxAge=6000)
@RestController
public class BookmarkController {
	@Autowired
	private BookmarkService service;
	
	@GetMapping("/bookmark/{user}/{type}")
	@ApiOperation("사용자 id와 type에 해당하는 북마크 목록 검색")
	public ResponseEntity<Map<String,Object>> searchBookmarks(
							@PathVariable int user, @PathVariable char type){
		return RestUtil.handleSuccess(service.searchBookmarks(user, type));
	}
	
	@GetMapping("/bookmark/{id}")
	@ApiOperation("북마크 id에 해당하는 식당 목록 검색")
	public ResponseEntity<Map<String,Object>> searchStoresById(@PathVariable int id){
		System.out.println(service.searchStoresById(id));
		return RestUtil.handleSuccess(service.searchStoresById(id));
	}
	
	@PostMapping("/bookmark")
	@ApiOperation("북마크 정보 등록")
	public ResponseEntity<Map<String,Object>> postBookmark(@RequestBody Bookmark bookmark){
		service.insertBookmark(bookmark);
		return RestUtil.handleSuccess("success");
	}
	
	@PutMapping("/bookmark")
	@ApiOperation("북마크 정보 수정")
	public ResponseEntity<Map<String,Object>> putBookmark(@RequestBody Bookmark bookmark){
		service.updateBookmark(bookmark);
		return RestUtil.handleSuccess("success");
	}
	
	@DeleteMapping("/bookmark/{id}")
	@ApiOperation("북마크 id에 해당하는 북마크 삭제")
	public ResponseEntity<Map<String,Object>> deleteBookmark(@PathVariable int id){
		return RestUtil.handleSuccess("success");
	}
	@GetMapping("/bookmark/storelist/{userId}")
	@ApiOperation("user가 bookmark한 store list")
	public ResponseEntity<Map<String, Object>> selectByUserId(@PathVariable int userId) {
		return RestUtil.handleSuccess(service.selectByUserId(userId));
	}
	
	@DeleteMapping("/bookmark/{userId}/{storeId}")
	@ApiOperation("user가 bookmark한 식당정보 삭제")
	public ResponseEntity<Map<String, Object>> deleteBookmarkByUserId(@PathVariable int userId,@PathVariable int storeId) {
		Map<String,Object> data = new HashMap<String, Object>();
		data.put("userId",userId);
		data.put("storeId",storeId);
		service.deleteByUserId(data);
		return RestUtil.handleSuccess("success");
	}
}

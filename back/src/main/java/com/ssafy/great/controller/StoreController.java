package com.ssafy.great.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.ssafy.great.dto.Store;
import com.ssafy.great.model.service.CrawlingService;
import com.ssafy.great.model.service.StoreService;
import com.ssafy.great.util.RestUtil;

import io.swagger.annotations.ApiOperation;

@CrossOrigin(origins= {"*"}, maxAge=6000)
@RestController
public class StoreController {
	@Autowired
	private StoreService service;
	@Autowired
	private CrawlingService cs;
	
	@GetMapping("/store/{id}")
	@ApiOperation("식당 id에 해당하는 식당 정보 검색")
	public ResponseEntity<Map<String,Object>> searchById(@PathVariable int id){
		return RestUtil.handleSuccess(service.searchById(id));
	}
	
	@GetMapping("/store/category/{category}")
	@ApiOperation("식당 category에 해당하는 식당 목록 검색")
	public ResponseEntity<Map<String,Object>> searchByCategory(@PathVariable int category){
		return RestUtil.handleSuccess(service.searchByCategory(category));
	}
	
	@PutMapping("/store")
	@ApiOperation("식당 정보 수정")
	public ResponseEntity<Map<String,Object>> putStore(@RequestBody Store store){
		service.updateStore(store);
		return RestUtil.handleSuccess("success");
	}
	
	@DeleteMapping("/store/{id}")
	@ApiOperation("식당 id에 해당하는 식당 정보 삭제")
	public ResponseEntity<Map<String,Object>> deleteStore(@PathVariable int id){
		service.deleteStore(id);
		return RestUtil.handleSuccess("success");
	}
}

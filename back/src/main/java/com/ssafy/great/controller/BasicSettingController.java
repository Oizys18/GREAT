package com.ssafy.great.controller;

import java.io.File;
import java.io.FileWriter;
import java.sql.Timestamp;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.LinkedHashMap;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ssafy.great.model.service.ApiService;
import com.ssafy.great.model.service.StoreApiServiceImpl;
import com.ssafy.great.util.RestUtil;



@CrossOrigin(origins= {"*"}, maxAge=6000)
@RestController
public class BasicSettingController {
	private static final Logger logger = LoggerFactory.getLogger(BasicSettingController.class);
	
	@Autowired
	ApiService apiService;
	@Autowired
	StoreApiServiceImpl storeApiService;
	
	@RequestMapping(value = "/create")
	public ResponseEntity<Map<String,Object>> searchBooks(HttpServletRequest req, HttpServletResponse res) {
		String searchBaseWord="%20맛집";
		String[] searchWordList = {"명동", "강남", "사당", "홍대", "건대"};
		
		//음식 카테고리(ex : korean;japanese;chinese;asian;buffet;koreanSnack;cafe;theOthers)   
		//세미콜론으로 구분       한식,일식,중식,아시아 음식,뷔페,분식,카페,기타  
		String type="korean" ; 
		String[] typeList = {"korean","japanese","chinese","asian","buffet","koreanSnack","cafe","theOthers"};
		String[] typeListKo = {"한식","일식","중식","아시아음식","뷔페","분식","카페","기타"};
		int index = 0;
		for(int i = 0; i < searchWordList.length; i++) {
			String searchWord = searchWordList[i] + searchBaseWord;
			Map<String, Object> result2 = apiService.createStoreInfo(searchWord, typeList[0]);
			for(int j = 0; j< typeList.length;j++) {
				Map<String, Object> resultData = apiService.createStoreInfo(searchWord, typeList[j]);
				LinkedHashMap<String, Object> result = (LinkedHashMap<String, Object>) resultData.get("result");
				LinkedHashMap<String, Object> place = (LinkedHashMap<String, Object>) result.get("place");
				ArrayList<LinkedHashMap<String,Object>> list = (ArrayList<LinkedHashMap<String,Object>>) place.get("list"); // list 타입은 LinkedHashMap
				
				storeApiService.parsingData(list,j+1);
			}
		}


		return RestUtil.handleSuccess("success");
	}

	
 
}

package com.ssafy.great.model.service;

import java.io.File;
import java.io.FileWriter;
import java.util.HashMap;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.ssafy.great.util.ApiUtil;

@Service
public class ApiService {

	private static final Logger logger = LoggerFactory.getLogger(ApiService.class);

	private static final String API_CUSTOM_URL = "https://map.naver.com/v5/api/search";

	
	

	public Map<String, Object> createStoreInfo(String searchWord,String type) {
		final String URL = API_CUSTOM_URL + "?caller=pcweb&query="+searchWord+"&type=place&restaurantCategory="+type+"&page=1&displayCount=99&isPlaceRecommendationReplace=true&lang=ko";
		Map<String, String> headers = new HashMap<>();
		Map<String, String> params = new HashMap<>();
		String jsonString = null;                              
		Map<String, Object> resultData = null;
		try {
			jsonString = ApiUtil.getHttpGET2String(URL, headers, params, false);
			ObjectMapper mapper = new ObjectMapper();
			resultData = mapper.readValue(jsonString, new TypeReference<Map<String, Object>>() {
			});
			logger.debug(URL + " - get API Info : " + jsonString);
		} catch (Exception e) {
			logger.info(URL + " - get API Exception : " + jsonString);
			e.printStackTrace();
		}
		return resultData;
	}

}

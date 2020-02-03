package com.ssafy.great.model.service;

import java.util.List;

import com.ssafy.great.dto.Store;

public interface CrawlingService {

	/** 
	 *  네이버 store 페이지 리뷰 크롤링
	 * @param storeList 네이버 API에서 가져와 DB에 입력한 store 리스트
	 */
	void crawlReviewData(List<Store> storeList);

	/**
	 * 네이버 store 페이지 tag 정보 크롤링
	 * @param storeList 네이버 API로 가져온 가게 상세정보 리스트
	 */
	void crawlStoreData(List<Store> storeList);

}
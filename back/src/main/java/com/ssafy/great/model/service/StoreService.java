package com.ssafy.great.model.service;

import java.util.List;

import com.ssafy.great.dto.Store;

public interface StoreService {

	/** 식당 id에 해당하는 식당 세부 정보 검색(메뉴 포함) */
	Store searchById(int id);

	/** 북마크한 식당 목록 검색(1 store / whole grid) */
	List<Store> searchBookmarkStores(List<Integer> idList);

	/** 식당 category에 해당하는 식당 목록 검색(1 grid block) */
	List<Store> searchByRating(int category, double x, double y);
	
	/** 식당 category에 해당하는 식당 목록 랜덤검색(1 grid block) */
	List<Store> searchByDefault(int category, double x, double y);

	/** 사용자 지정 위치로부터 가까운 식당 8개 목록 검색 */
	List<Store> searchByLocation(int category, double x, double y);
	
	

	
	/** 식당 정보 수정 */
	void updateStore(Store store);

	/** 식당 정보 삭제 */
	void deleteStore(int id);

	/** 식당 정보 삽입 */
	void insertStore(Store store);

}
package com.ssafy.great.model.dao;

import java.util.List;
import java.util.Map;

import com.ssafy.great.dto.Store;

public interface StoreDao {

	/** 식당 id에 해당하는 식당 정보 검색*/
	Store selectById(int id);

	/** 식당 id 리스트에 해당하는 식당 목록 검색 */
	List<Store> selectByIdList(List<Integer> idList);

	/** 식당 category에 해당하는 식당 목록 별점순 검색 */
	List<Store> selectByRating(Map<String,Object> data);
	
	/** 식당 category에 해당하는 식당 목록 랜덤검색 */
	List<Store> selectByDefault(Map<String,Object> data);

	/** x,y 좌표 기준 최소 거리 8개 식당 목록 검색 */
	List<Store> selectByLocation(Map<String,Object> data);
	
	/** 식당 정보 수정 */
	void update(Store store);

	/** 식당 정보 삭제 */
	void delete(int id);

	/** 식당 정보 삽입 */
	boolean insert(Store store);
}
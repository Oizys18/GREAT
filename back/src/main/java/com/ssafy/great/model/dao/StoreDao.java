package com.ssafy.great.model.dao;

import java.util.List;

import com.ssafy.great.dto.Store;

public interface StoreDao {

	/** 식당 id에 해당하는 식당 정보 검색*/
	Store selectById(int id);

	/** 식당 id 리스트에 해당하는 식당 목록 검색 */
	List<Store> selectByIdList(List<Integer> idList);

	/** 식당 category에 해당하는 식당 목록 검색 */
	List<Store> selectByCategory(int category);

	/** 식당 정보 수정 */
	void update(Store store);

	/** 식당 정보 삭제 */
	void delete(int id);

	/** 식당 정보 삽입 */
	boolean insert(Store store);
}
package com.ssafy.great.model.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ssafy.great.dto.Store;
import com.ssafy.great.model.dao.StoreDao;

@Service
public class StoreServiceImpl implements StoreService {
	@Autowired
	private StoreDao dao;
	
	/** 식당 id에 해당하는 식당 세부 정보 검색(메뉴 포함) */
	public Store searchById(int id) {
		return dao.selectById(id);
	}
	
	/** 북마크한 식당 목록 검색(1 store / whole grid) 
	 * 	@param idList 북마크한 식당들의 id 목록
	 * */
	public List<Store> searchBookmarkStores(List<Integer> idList){
		return dao.selectByIdList(idList);
	}
	
	/** 식당 category에 해당하는 식당 목록 검색(1 grid block) */
	public List<Store> searchByRating(int category, double x, double y){
		Map<String,Object> data = new HashMap<String, Object>();
		data.put("category", category);
		data.put("x", x);
		data.put("y", y);
		return dao.selectByRating(data);
	}
	
	/** 사용자 지정 위치로부터 가까운 식당 8개 목록 검색 
	 * @param category 사용자가 선택한 카테고리 id
	 * @param x 사용자 지정 위치 x좌표
	 * @param y 사용자 지정 위치 y좌표
	 */
	public List<Store> searchByLocation(int category, double x, double y) {
		Map<String,Object> data = new HashMap<String, Object>();
		data.put("category", category);
		data.put("x", x);
		data.put("y", y);
		return dao.selectByLocation(data);
	}
	
	/** 식당 정보 수정 */
	public void updateStore(Store store) {
		dao.update(store);
	}
	
	/** 식당 정보 삭제 */
	public void deleteStore(int id) {
		dao.delete(id);
	}
	
	/** 식당 정보 삽입 */
	public void insertStore(Store store) {
		dao.insert(store);
	}

	@Override
	public List<Store> searchByDefault(int category, double x, double y) {
		Map<String,Object> data = new HashMap<String, Object>();
		data.put("category", category);
		data.put("x", x);
		data.put("y", y);
		return dao.selectByDefault(data);
	}
}

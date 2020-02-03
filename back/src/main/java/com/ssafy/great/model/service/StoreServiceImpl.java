package com.ssafy.great.model.service;

import java.util.List;

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
	public List<Store> searchByCategory(int category){
		return dao.selectByCategory(category);
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
}

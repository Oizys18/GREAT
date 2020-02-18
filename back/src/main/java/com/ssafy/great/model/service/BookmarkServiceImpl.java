package com.ssafy.great.model.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ssafy.great.dto.Bookmark;
import com.ssafy.great.dto.Store;
import com.ssafy.great.model.dao.BookmarkDao;

@Service
public class BookmarkServiceImpl implements BookmarkService {
	@Autowired
	private BookmarkDao dao;
	@Autowired
	private StoreService storeService;
	
	/** 북마크 목록 검색
	 * @param user 사용자 아이디
	 * @param type 북마크 타입
	 */
	public List<Bookmark> searchBookmarks(int user, char type){
		Map<String, Object> data = new HashMap<String, Object>();
		data.put("user", user);
		data.put("type", type);
		
		return dao.selectByUser(data);
	}
	
	/** 북마크한 식당 목록 검색 (1 store / whole grid) */
	public List<Store> searchStoresById(int id){
		return dao.selectById(id);
	}
	
	/** 북마크 등록 */
	public void insertBookmark(Bookmark bookmark) {
		dao.insert(bookmark);
	}
	
	/** 북마크 수정 */
	public void updateBookmark(Bookmark bookmark) {
		dao.update(bookmark);
	}
	
	/** 북마크 삭제 */
	public void deleteBookmark(int id) {
		dao.delete(id);
	}
	

	@Override
	public List<Store> selectByUserId(int userId) {
		// TODO Auto-generated method stub
		return dao.selectByUserId(userId);
	}

	@Override
	public void deleteByUserId(Map<String, Object> data) {
		dao.deleteByUserId(data);
		
	}
}

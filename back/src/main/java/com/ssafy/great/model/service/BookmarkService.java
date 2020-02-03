package com.ssafy.great.model.service;

import java.util.List;

import com.ssafy.great.dto.Bookmark;
import com.ssafy.great.dto.Store;

public interface BookmarkService {

	/** 북마크 목록 검색
	 * @param user 사용자 아이디
	 * @param type 북마크 타입
	 */
	List<Bookmark> searchBookmarks(int user, char type);

	/** 북마크한 식당 목록 검색 (1 store / whole grid) */
	List<Store> searchStoresById(int id);

	/** 북마크 등록 */
	void insertBookmark(Bookmark bookmark);

	/** 북마크 수정 */
	void updateBookmark(Bookmark bookmark);

	/** 북마크 삭제 */
	void deleteBookmark(int id);

}
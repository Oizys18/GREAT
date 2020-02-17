package com.ssafy.great.model.dao;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.ssafy.great.dto.Bookmark;
import com.ssafy.great.dto.Store;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class BookmarkDaoImpl implements BookmarkDao{
    @Autowired
    private SqlSession session;

    /** 사용자 id에 해당하는 북마크 목록 검색 */
    public List<Bookmark> selectByUser(Map<String, Object> data){
        return session.selectList("sql.bookmark.selectByUser", data);
    }

    /** 북마크 id에 해당하는 북마크의 식당 id 리스트 검색 */
    public List<Store> selectById(int id){
    	return session.selectList("sql.bookmark.selectById", id);
    }
    
    /** 북마크 정보 등록 */
    public void insert(Bookmark bookmark){	
        session.insert("sql.bookmark.insertIntoBookmark", bookmark);
        int bookmarkId = bookmark.getId();
        
        // bookmarkstore 테이블에 저장할 (bookmark id, store id) map 생성
        for(int store : bookmark.getStores()) {
        	Map<String, Integer> data = new HashMap<String, Integer>();
        	data.put("bookmark", bookmarkId);
        	data.put("store", store);
        	session.insert("insertIntoBookmarkStore", data);
        }
    }

    /** 북마크 정보 수정 */
    public void update(Bookmark bookmark){
        session.update("sql.bookmark.update", bookmark);
    }

    /** 북마크 삭제 */
    public void delete(int id){
        session.delete("sql.bookmark.deleteFromBookmarkStore", id);
        session.delete("sql.bookmark.deleteFromBookmark", id);
    }
    
	@Override
	public List<Store> selectByUserId(int userId) {
		// TODO Auto-generated method stub
		return session.selectList("sql.bookmark.selectByUserId",userId);
	}

	@Override
	public void deleteByUserId(Map<String, Object> data) {
		session.delete("sql.bookmark.deleteByBookmarkStoreUserId",data);
		session.delete("sql.bookmark.deleteByBookmarkUserId",data);
		
	}
}

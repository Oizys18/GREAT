package com.ssafy.great.model.dao;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.ssafy.great.dto.Menu;
import com.ssafy.great.dto.Store;

@Repository
public class StoreDaoImpl implements StoreDao{
    @Autowired
    private SqlSession session;

    /** 식당 id에 해당하는 식당 정보 검색*/
    public Store selectById(int id){
        return session.selectOne("sql.store.selectById", id);
    }

    /** 식당 id 리스트에 해당하는 식당 목록 검색 */
    public List<Store> selectByIdList(List<Integer> idList){
        Map<String, Object> data = new HashMap<String, Object>();
        data.put("idList", idList);
        return session.selectList("sql.store.selectByIdList", data);
    }

    /** 식당 category에 해당하는 식당 목록 검색 */
    public List<Store> selectByRating(Map<String,Object> data){
        return session.selectList("sql.store.selectByRating", data);
    }
    
    /** x,y 좌표 기준 최소 거리 8개 식당 목록 검색 
     * @param data('x') 사용자 위치 x좌표
     * 		  data('y') 사용자 위치 y좌표
     * 		  data('category') 카테고리 id
     */
    public List<Store> selectByLocation(Map<String,Object> data){
    	return session.selectList("sql.store.selectByLocation", data);
    }
    
    /** 식당 정보 수정 */
    public void update(Store store){
        session.update("sql.store.update", store);
    }

    /** 식당 정보 삭제 */
    public void delete(int id){
        session.delete("sql.store.delete", id);
    }
    
    /** 식당 정보 삽입 */
    public boolean insert(Store store) {
    	// 삽입 전 같은 store_id를 가진 가게 정보가 이미 DB에 있는지 확인
    	Store prev = session.selectOne("sql.store.selectByStoreId", store.getStore_id());
    	if(prev != null) return false;
    	
    	// store 테이블 삽입
    	session.insert("sql.store.insertStore", store);
    	
    	if(store.getMenu() != null) {
    		// menu 테이블 삽입
        	for(Menu menu: store.getMenu()) {
        		// 위에서 insert한 데이터의 pk값을 store id로 설정
        		menu.setStore(store.getId());
        		session.insert("sql.store.insertMenu", menu);
        	}
    	}
    	
    	return true;
    }

    /** 식당 category에 해당하는 식당 목록 랜덤검색 */
	@Override
	public List<Store> selectByDefault(Map<String,Object> data) {
		// TODO Auto-generated method stub
		return session.selectList("sql.store.selectByDefault",data);
	}


}
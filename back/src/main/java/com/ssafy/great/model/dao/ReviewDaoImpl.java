package com.ssafy.great.model.dao;

import java.util.List;

import com.ssafy.great.dto.Review;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class ReviewDaoImpl implements ReviewDao{
    @Autowired
    private SqlSession session;

    /** 모든 리뷰 목록 검색 */
    public List<Review> selectAll(){
        return session.selectList("sql.review.selectAll");
    }

    /** 리뷰 id에 해당하는 리뷰 정보 검색 */
    public Review selectById(int id){
        return session.selectOne("sql.review.selectById", id);
    }

    /** 식당 id에 해당하는 리뷰 목록 검색 */
    public List<Review> selectByStore(int store){
        return session.selectList("sql.review.selectByStore", store);
    }

    /** 리뷰 정보 등록 */
    public void insert(Review review){
        session.insert("sql.review.insert", review);
    }

    /** 리뷰 정보 수정 */
    public void update(Review review){
        session.update("sql.review.update", review);
    }

    /** 리뷰 삭제 */
    public void delete(int id){
        session.delete("sql.review.delete", id);
    }

	@Override
	public List<Review> selectByUserId(int userId) {
		// TODO Auto-generated method stub
		return session.selectList("sql.review.selectByUserId",userId);
	}
}
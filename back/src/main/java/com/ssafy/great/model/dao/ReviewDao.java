package com.ssafy.great.model.dao;

import java.util.List;

import com.ssafy.great.dto.Review;

public interface ReviewDao {

	/** 모든 리뷰 목록 검색 */
	List<Review> selectAll();
	
	
	/** 사용자의 리뷰 목록 검색 */
	List<Review> selectByUserId(int userId);
	

	/** 리뷰 id에 해당하는 리뷰 정보 검색 */
	Review selectById(int id);

	/** 식당 id에 해당하는 리뷰 목록 검색 */
	List<Review> selectByStore(int store);

	/** 리뷰 정보 등록 */
	void insert(Review review);

	/** 리뷰 정보 수정 */
	void update(Review review);

	/** 리뷰 삭제 */
	void delete(int id);

}
package com.ssafy.great.model.service;

import java.util.List;

import com.ssafy.great.dto.Review;

public interface ReviewService {

	/** 모든 리뷰 검색 */
	List<Review> searchAll();
	
	/** 사용자의 리뷰 검색 */
	List<Review> selectByUserId(int userId);

	/** 리뷰 id에 해당하는 리뷰 상세 정보 검색 */
	Review searchById(int id);

	/** 식당 id에 해당하는 리뷰 목록 검색 */
	List<Review> searchByStore(int store);

	/** 리뷰 등록 */
	void insertReview(Review review);

	/** 리뷰 수정 */
	void updateReview(Review review);

	/** 리뷰 삭제 */
	void deleteReview(int id);

}
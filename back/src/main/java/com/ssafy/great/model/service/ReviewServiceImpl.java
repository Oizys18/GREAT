package com.ssafy.great.model.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ssafy.great.dto.Review;
import com.ssafy.great.model.dao.ReviewDao;

@Service
public class ReviewServiceImpl implements ReviewService {
	@Autowired
	private ReviewDao dao;
	
	/** 모든 리뷰 검색 */
	public List<Review> searchAll(){
		return dao.selectAll();
	}
	
	/** 리뷰 id에 해당하는 리뷰 상세 정보 검색 */
	public Review searchById(int id) {
		return dao.selectById(id);
	}
	
	/** 식당 id에 해당하는 리뷰 목록 검색 */
	public List<Review> searchByStore(int store){
		return dao.selectByStore(store);
	}
	
	/** 리뷰 등록 */
	public void insertReview(Review review) {
		dao.insert(review);
	}
	
	/** 리뷰 수정 */
	public void updateReview(Review review) {
		dao.update(review);
	}
	
	/** 리뷰 삭제 */
	public void deleteReview(int id) {
		dao.delete(id);
	}

	@Override
	public List<Review> selectByUserId(int userId) {
		// TODO Auto-generated method stub
		return dao.selectByUserId(userId);
	}
}

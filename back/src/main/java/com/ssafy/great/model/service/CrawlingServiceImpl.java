package com.ssafy.great.model.service;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.Iterator;
import java.util.List;

import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ssafy.great.dto.Review;
import com.ssafy.great.dto.Store;
import com.ssafy.great.model.dao.ReviewDao;
import com.ssafy.great.model.dao.StoreDao;

@Service
public class CrawlingServiceImpl implements CrawlingService {
	@Autowired
	private StoreDao storeDao;
	@Autowired
	private ReviewDao reviewDao;
	
	private String baseUrl = "https://store.naver.com/restaurants/detail?entry=pll&id=";
	/** 
	 *  네이버 store 페이지 리뷰 크롤링
	 * @param storeList 네이버 API에서 가져와 DB에 입력한 store 리스트
	 */
	public void crawlReviewData(List<Store> storeList) {
		for(Store store : storeList) {
			String url = baseUrl + store.getStore_id();
			List<Review> reviewList = new ArrayList<Review>();
			
			try {
				Document document = Jsoup.connect(url).get();
				// 하단 영수증 리뷰 Element
				Elements reviewElement = document.select(".receipt_review_area");

				Iterator<Element> reviewListElement = 
						reviewElement.select(".flick_content").iterator();

				int ratingSum = 0;
				while(reviewListElement.hasNext()) {
					Element element = reviewListElement.next();
					Review review = new Review();
					
					if(element.select(".star_area .score").text().trim().equals("")) break;
					
					int rating = Integer.parseInt(element.select(".star_area .score").text().trim());
					review.setRating(rating);
					ratingSum += rating;
					
					review.setContents("리뷰 내용 ~.~");
					
					SimpleDateFormat format = new SimpleDateFormat("yyyy.MM.dd");
			        Date parsed = format.parse(element.select(".reviewer span").first().text().trim());
			        java.sql.Date date = new java.sql.Date(parsed.getTime());
					review.setDate(date);
					
					reviewList.add(review);
				}
				
				double storeRating = (double)ratingSum / reviewList.size();
				store.setRating((double)Math.round((storeRating * 10) / 10.0));
				
				// tag정보와 rating정보를 포함한 store 값 DB에 삽입
				boolean insertResult = storeDao.insert(store);
				if(!insertResult) continue;
				
				// 삽입한 store의 id값을 review의 store값에 setting 후 DB에 삽입
				for(Review review : reviewList) {
					review.setStore(store.getId());
					reviewDao.insert(review);
				}
			}catch (Exception e) {
				e.printStackTrace();
			}
		}
	}
	
	/**
	 * 네이버 store 페이지 tag 정보 크롤링
	 * @param storeList 네이버 API로 가져온 가게 상세정보 리스트
	 */
	public void crawlStoreData(List<Store> storeList) {
		for(Store store : storeList) {
			String url = baseUrl + store.getStore_id();
			
			try {
				Document document = Jsoup.connect(url).get();
				// 상세 정보 Element
                Elements detailElement = document.select(".list_bizinfo");
                
                // 가게의 태그 정보 크롤링 & property setting
                store.setTag(detailElement.select(".list_item_convenience .txt .convenience").text().trim());
			}catch (Exception e) {
				e.printStackTrace();
			}
		}
		
		crawlReviewData(storeList);
	}
}

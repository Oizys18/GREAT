package com.ssafy.great.dto;

import java.sql.Date;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Review {
    private int id;                 // primary key
    private int store;              // 식당 id
    private String contents;        // 리뷰 내용
    private int writer;				// 리뷰 작성자 id
    private int rating;				// 리뷰 평점
    private Date date;              // 리뷰 작성 날짜
    private String image;           // 리뷰 사진 url
}
package com.ssafy.great.dto;

import java.sql.Timestamp;
import java.util.List;

import org.locationtech.jts.geom.Point;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Store {
    private int id;                         // primary key
    private int store_id;
    private String name;                    // 식당 이름
    private String open_time;           	// 영업 시간
    private double map_x;                   // 식당 위치 x좌표
    private double map_y;                   // 식당 위치 y좌표
    private String location_name;           // 식당 위치
    private double rating;                  // 별점
    private String phone;                   // 전화번호
    private int category;                   // 식당 카테고리
    private String tag;                     // 식당 상세 태그
    private String image;                   // 식당 사진 URL
    private List<Menu> menu;                // 식당 메뉴
}
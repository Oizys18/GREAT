package com.ssafy.great.dto;

import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Bookmark {
    private int id;                     // primary key
    private int user;                   // 사용자 id
    private String name;                // 북마크 이름
    private char type;                  // 북마크 타입
    List<Integer> stores;               // 식당 id 리스트
}
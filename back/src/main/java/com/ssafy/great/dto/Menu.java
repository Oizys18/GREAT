package com.ssafy.great.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Menu{
    private int id;                 // primary key
    private int store;              // 식당 id
    private String name;            // 메뉴 이름
    private String price;              // 메뉴 가격
}
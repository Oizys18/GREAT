package com.ssafy.great.dto;

import java.sql.Date;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class User{
    private int id;                     // primary key
    private String email;               // 이메일 주소
    private String password;            // 비밀번호
    private String sns_token;           // sns 인증 토큰
    private Date birth;                 // 생년월일
    private char gender;                // 성별
    private String name;                // 닉네임
}
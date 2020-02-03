package com.ssafy.great.interceptor;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.servlet.HandlerInterceptor;

import com.ssafy.great.model.dao.UserDao;
import com.ssafy.great.util.JwtUtil;

public class JwtAuthInterceptor implements HandlerInterceptor {
	@Autowired
	private JwtUtil jwtUtil;
	
	private String HEADER_TOKEN_KEY = "authorization";
	
	@Override
	public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler)
			throws Exception {
		if(request.getMethod().equals("OPTIONS")) return true;
		
		String requestToken = request.getHeader(HEADER_TOKEN_KEY);
		
		// 토큰 검증 실패하면 Exception 발생 시킴
		JwtUtil.verifyToken(requestToken);
		return true;
	}
}

package com.ssafy.great.interceptor;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.HandlerInterceptor;

import com.ssafy.great.exception.UnauthorizedException;
import com.ssafy.great.model.dao.UserDao;
import com.ssafy.great.model.service.JwtService;

@Component
public class JwtAuthInterceptor implements HandlerInterceptor {
	@Autowired
	private JwtService jwtService;
	
	private String HEADER_AUTH = "authorization";
	
	@Override
	public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler)
			throws Exception {
		if(request.getMethod().equals("OPTIONS")) {
			return true;
		}
		final String token = request.getHeader(HEADER_AUTH);
		System.out.println(token);
		if(token != null && jwtService.isUsable(token)){
			return true;
		}else{
			throw new UnauthorizedException();
		}
	}
}

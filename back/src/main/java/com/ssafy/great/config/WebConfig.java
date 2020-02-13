package com.ssafy.great.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import com.ssafy.great.interceptor.JwtAuthInterceptor;

@Configuration
public class WebConfig implements WebMvcConfigurer {
	@Autowired
	private JwtAuthInterceptor jwtAuthInterceptor;
	
	private String[] whiteList = {
			"/user/login/**",
			"/user/join/**",
			"/user/email/**",
			"/user/socialLogin/**",
			"/user/search/**",
			"/review/store/**"
	};
	
	@Override
	public void addInterceptors(InterceptorRegistry registry) {
		registry.addInterceptor(jwtAuthInterceptor)
				.addPathPatterns("/user/**", "/bookmark/**","/review/**")
				.excludePathPatterns(whiteList);
	}
}

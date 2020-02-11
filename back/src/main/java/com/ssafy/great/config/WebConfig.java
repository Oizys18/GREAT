package com.ssafy.great.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import com.ssafy.great.interceptor.JwtAuthInterceptor;

@Configuration
public class WebConfig implements WebMvcConfigurer {
	private String[] whiteList = {
			"/user/login/**",
			"/user/join/**",
			"/user/email/**",
			"/user/socialLogin/**",
			"/user/search/**"
	};
	
	@Override
	public void addInterceptors(InterceptorRegistry registry) {
		registry.addInterceptor(new JwtAuthInterceptor())
				.addPathPatterns("/user/**", "/bookmark")
				.excludePathPatterns(whiteList);
	}
}

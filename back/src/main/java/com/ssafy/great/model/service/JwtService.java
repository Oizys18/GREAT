package com.ssafy.great.model.service;

import java.util.Map;

public interface JwtService {

	
	<T> String create(String key, T data, String subject);
	byte[] generateKey();
	boolean isUsable(String jwt);
	public Map<String, Object> get(String key);
}

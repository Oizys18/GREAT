package com.ssafy.great;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.ssafy.great.model.service.StoreApiServiceImpl;

@SpringBootApplication
public class GreatApplication {
	@Autowired
	private StoreApiServiceImpl service;
	
	public static void main(String[] args) {
		SpringApplication.run(GreatApplication.class, args);
	}
}

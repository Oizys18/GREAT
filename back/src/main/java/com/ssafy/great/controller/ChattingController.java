package com.ssafy.great.controller;

import java.util.HashMap;
import java.util.Map;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.ssafy.great.util.RestUtil;
import com.ssafy.great.model.service.ChatService;;



@CrossOrigin(origins= {"*"}, maxAge=6000)
@RestController
public class ChattingController {
	private static final Logger logger = LoggerFactory.getLogger(ChattingController.class);
	
	@Autowired
	private ChatService chatService;
	
	@PostMapping(value = "/chat")
	public ResponseEntity<Map<String,Object>> create(@RequestBody Map<String, Object> msg) {
		System.out.println(msg.get("msg"));
		Map<String, String> data = new HashMap<String, String>();
		String res = chatService.getChatResponse((String)msg.get("msg"));
		if(res.equals("I have no answer for that."))
			data.put("data", "죄송해요<br>제가 답변드리기 힘든 질문이에요<br>'도움말'을 입력해주세요");
		else
		data.put("data", res);
		System.out.println(data);
		return RestUtil.handleSuccess(data);
	}

	
 
}

package com.ssafy.great.model.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class ChatService {

	public String getChatResponse(String request) {
		String msg="";
		if(request.equals("안녕")) {
			msg="안녕하세요. GrEAT봇 입니다.<br>이쁘게 봐주세요 :)";
		}else if(request.equals("도움말")) {
			msg="1. 전달 [하고싶은말] :<br> GrEAT관리자에게 메시지를 전송합니다.<br>2. 구성원";
		}else if(request.equals("구성원")) {
			msg="양찬우(팀장) : Front-end<br>신채민  : Front-end<br>조신비 : Front-end<br>조한슬 : Back-end<br>박지수 : Back-end";
		}else if(request.contains("전달")) {
			request = request.replace("전달", "");
			msg="관리자에게 "+request+"<br>라고 전달할까요 ? ";
		}else if(request.equals("응")||request.equals("네")||request.equals("ㅇㅇ")||request.equals("ㅇㅋ")||request.equals("ㅇㅋ")) {
			msg="메시지를 성공적으로 전달하였습니다.";
		}else {
			msg = "I have no answer for that.";
		}
		return msg;

	}

}

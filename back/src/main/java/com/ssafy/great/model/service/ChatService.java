package com.ssafy.great.model.service;

import org.alicebot.ab.Chat;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * The Service for Program AB chat bot. It will communicate with the AB chat Bot
 * and retrieve the result based on the configure AIML
 * 
 * @author Kavin
 *
 */
@Service
public class ChatService {

	@Autowired
	private Chat chatSession;

	/**
	 * Return the chat bot response for given text
	 * 
	 * @param request
	 *            the input text
	 * @return the chatbot response
	 */
	public String getChatResponse(String request) {
		return chatSession.multisentenceRespond(request);

	}

}

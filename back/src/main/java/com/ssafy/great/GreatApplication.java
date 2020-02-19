package com.ssafy.great;

import org.alicebot.ab.Bot;
import org.alicebot.ab.Chat;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
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
	
	
	@Bean
	public Bot getBot(@Value(value = "${simplebot.name}") String botname) {
		String path = System.getProperty("user.dir").replace("\\" ,  "/");
		Bot bot = new Bot(botname, path);
		return bot;
		
	}

	/**
	 * Initialize the Chat bean,
	 * 
	 * @param bot
	 *            the {@link Bot} instance
	 * @return the {@link Chat} instance
	 */
	@Bean
	public Chat getChat(Bot bot) {
		Chat chatSession = new Chat(bot);
		return chatSession;

	}
}

package com.ssafy.great.util;

import java.util.Date;

import org.springframework.stereotype.Component;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.interfaces.JWTVerifier;

@Component
public class JwtUtil {
	private final static String SIGN_KEY = "GREAT_SIGN_KEY";
	private static Date expiredTime = new Date(System.currentTimeMillis() + 1000 * 10);
	private static String issuer = "Great";
	
	/** 사용자 토큰 발급 */
	public static String CreateToken() {
		return JWT.create()
				  .withIssuer(issuer)
				  .withExpiresAt(expiredTime)
				  .sign(Algorithm.HMAC256(SIGN_KEY));
	}
	
	/** 사용자 요청 토큰 검증 */
	public static void verifyToken(String requestToken) {
		JWTVerifier verifier = JWT.require(Algorithm.HMAC256(SIGN_KEY))
				                  .withIssuer(issuer)
				                  .build();
		
		verifier.verify(requestToken);
	}
}

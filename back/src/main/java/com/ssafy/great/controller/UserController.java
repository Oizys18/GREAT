package com.ssafy.great.controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.ssafy.great.dto.User;
import com.ssafy.great.model.service.UserService;
import com.ssafy.great.util.JwtUtil;
import com.ssafy.great.util.RestUtil;

import io.swagger.annotations.ApiOperation;

@CrossOrigin(origins={"*"}, maxAge=60000)
@RestController
public class UserController {
	@Autowired
	private UserService service;
	
	@GetMapping("/user")
	@ApiOperation("모든 사용자 목록 검색")
	public ResponseEntity<Map<String,Object>> searchAll(){
		return RestUtil.handleSuccess(service.searchAll());
	}
	
	@GetMapping("/user/{id}")
	@ApiOperation("사용자 id에 해당하는 사용자 검색")
	public ResponseEntity<Map<String,Object>> searchById(@PathVariable int id){
		return RestUtil.handleSuccess(service.searchById(id));
	}
	
	
	
	@GetMapping("/user/search/{email}")
	@ApiOperation("이메일에 대항하는 사용자 id 검색")
	public ResponseEntity<Map<String,Object>> selectByEmail(@PathVariable String email){
		return RestUtil.handleSuccess(service.selectByEmail(email));
	}
	
	@GetMapping("/user/email/{email}")
	@ApiOperation("이메일 중복 체크")
	public ResponseEntity<Map<String,Object>> emailCheck(@PathVariable String email){
		if(service.emailCheck(email)) return RestUtil.handleSuccess("ok");
		else return RestUtil.handleSuccess("not ok");
	}
	
	@PostMapping("/user/login")
	@ApiOperation("사용자 로그인")
	public ResponseEntity<Map<String,Object>> login(@RequestBody Map<String, String> loginData){
		boolean result = service.login(loginData);
		Map<String, String> data = new HashMap<String, String>();
		
		if(result) data.put("data", "success");
		else return RestUtil.handleSuccess("not success");
		
		String token = JwtUtil.CreateToken();
		data.put("Authorization", token);
		
		return RestUtil.handleSuccess(data);
	}
	
	@PostMapping("/user/socialLogin")
	@ApiOperation("사용자 로그인")
	public ResponseEntity<Map<String,Object>> socialLogin(@RequestBody String sns_token){
		sns_token=(String) sns_token.subSequence(0, sns_token.length()-1);
		System.out.println(sns_token);
		boolean result = service.socialLogin(sns_token);
		Map<String, String> data = new HashMap<String, String>();
		
		if(result) data.put("data", "success");
		else return RestUtil.handleSuccess("not success");		
		String token = JwtUtil.CreateToken();
		data.put("Authorization", token);
		return RestUtil.handleSuccess(data);
	}
	
	@PostMapping("/user/join")
	@ApiOperation("사용자 회원가입")
	public ResponseEntity<Map<String,Object>> join(@RequestBody User user){
		service.join(user);
		Map<String, String> data = new HashMap<String, String>();
		
		String token = JwtUtil.CreateToken();
		data.put("Authorization", token);
		data.put("data", "success");
		
		return RestUtil.handleSuccess(data);
	}
	
	@PutMapping("/user")
	@ApiOperation("사용자 정보 수정")
	public ResponseEntity<Map<String,Object>> update(@RequestBody User user){
		service.updateUser(user);
		return RestUtil.handleSuccess("success");
	}
	
	@DeleteMapping("/user/{id}")
	@ApiOperation("사용자 회원 탈퇴")
	public ResponseEntity<Map<String,Object>> delete(@PathVariable int id){
		service.deleteUser(id);
		return RestUtil.handleSuccess("success");
	}
}

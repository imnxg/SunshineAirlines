package com.demo.controller;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.demo.service.UserService;

@Controller
@ResponseBody
public class UserController {

	@Resource
	private UserService userService;
	
	@RequestMapping("/addUser")
	public Object addUser(String email, String firstName, String lastName, String gender, String dateOfBirth,
			String phone, String photo, String address, String roleId) {
		return userService.addUser(email, firstName, lastName, gender, dateOfBirth, phone, photo, address, roleId);
	}
	
}

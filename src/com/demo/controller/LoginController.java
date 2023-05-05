package com.demo.controller;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.demo.service.UserService;

/**
 * ��¼
 * �û�����
 * controller��
 * @author keney
 *
 */
@Controller
@ResponseBody
public class LoginController {

	@Resource
	private UserService userService;
	
	/**
	 * ��¼
	 * @param email  ����
	 * @param password ����
	 * @return
	 */
	@RequestMapping("/login")
	public Object login(String email,String password) {
		return userService.login(email, password);
	}
	
	/**
	 *�޸�����
	 * @param userId �û�id
	 * @param password ����
	 * @return 
	 */
	@RequestMapping("/updatePassword")
	public Object updatePassword(String userId,String password) {
		return userService.updatePassword(userId, password);
	}
	
	/**
	 * �û���ѯ
	 * @param roleId  ��ɫid
	 * @param startPage ��ʼҳ
	 * @param pageSize ÿҳ��ʾ����
	 * @param name ����  ������ģ����ѯ��
	 * @return
	 */
	@RequestMapping("/userList")
	public Object userList(String roleId,String name,String startPage,String pageSize) {
		return userService.userList(roleId, name,startPage, pageSize);
	}
}

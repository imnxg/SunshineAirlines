package com.demo.service;

import com.demo.pojo.Result;

/**
 * 登录和用户管理
 * @author keney
 *
 */
public interface UserService {
	//登录
	 Result login(String email,String password);
	
	//修改密码
	Result updatePassword(String userId,String password);
	//查询所有用户信息
	Result userList(String roleId,String name,String startPage,String pageSize);
}

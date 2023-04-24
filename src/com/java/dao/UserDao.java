package com.java.dao;

import java.util.HashMap;
import java.util.List;
/*登录
 * 用户管理
 * 
 */
public interface UserDao {
	//登录
	List<HashMap<String,Object>> login(HashMap<String,Object> map);
	List<HashMap<String,Object>> findByEmail(String email);
	
	//修改密码
	int updatePassword(HashMap<String,Object> map);
	List<HashMap<String,Object>> findByUserId(String userId);
	
	//用户管理
	List<HashMap<String,Object>> userList(HashMap<String,Object> map);
	List<HashMap<String,Object>> userByPageSizeAndRoleId(HashMap<String,Object> map);
	int total(HashMap<String,Object> map);
	int totalByPageSizeAndRoleId(HashMap<String,Object> map);
}

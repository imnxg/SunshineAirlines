package com.demo.dao;

import java.util.HashMap;
import java.util.List;
/*��¼
 * �û�����
 * 
 */
public interface UserDao {
	//��¼
	List<HashMap<String,Object>> login(HashMap<String,Object> map);
	List<HashMap<String,Object>> findByEmail(String email);
	
	//�޸�����
	int updatePassword(HashMap<String,Object> map);
	List<HashMap<String,Object>> findByUserId(String userId);
	
	//�û�����
	List<HashMap<String,Object>> userList(HashMap<String,Object> map);
	List<HashMap<String,Object>> userByPageSizeAndRoleId(HashMap<String,Object> map);
	int total(HashMap<String,Object> map);
	int totalByPageSizeAndRoleId(HashMap<String,Object> map);
	
	//addUser?email=param1&firstName=param2&
	//lastName=param3&gender=param4&dateOfBirth=param5&phone=param6&photo=param7&address=param8&roleId=param9
	//�û����
	int addUser(HashMap<String,Object> map);
	
	
}

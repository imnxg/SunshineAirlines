package com.demo.service;

import com.demo.pojo.Result;

/**
 * ��¼���û�����
 * @author keney
 *
 */
public interface UserService {
	//��¼
	 Result login(String email,String password);
	
	//�޸�����
	Result updatePassword(String userId,String password);
	//��ѯ�����û���Ϣ
	Result userList(String roleId,String name,String startPage,String pageSize);
}

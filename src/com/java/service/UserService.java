package com.java.service;

import com.java.pojo.Result;

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
	Result userList(String roleId,String startPage,String pageSize,String name);
}

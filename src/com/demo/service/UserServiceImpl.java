package com.demo.service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.demo.dao.UserDao;
import com.demo.pojo.Page;
import com.demo.pojo.Result;

/**
 * 登录 
 * 用户管理
 * 业务逻辑层
 * @author keney
 *
 */
@Service
public class UserServiceImpl implements UserService{

	@Resource
	private UserDao userDao;

	/**
	 * 登录
	 */
	@Override
	public Result login(String email, String password) {
		Result result = new Result("fail",null);
		HashMap<String,Object> map = new HashMap<String,Object>();
		map.put("email", email);
		map.put("password",password);
		
		List<HashMap<String,Object>> listEmail = userDao.findByEmail(email);
		
		if(listEmail!=null && listEmail.size()>0) {
			List<HashMap<String,Object>>  list = userDao.login(map);
			if(list!=null && list.size()>0) {
				result.setFlag("success");
				result.setData(list);
			}else {
				result.setData("密码错误");
			}
			
		}else {
			result.setData("邮箱不存在");
		}
		
		
		return result;
	}

	/**
	 * 修改密码
	 */
	@Override
	public Result updatePassword(String userId,String password) {
		Result result = new Result("fail",null);
		HashMap<String,Object> map = new HashMap<String,Object>();
		map.put("userId", userId);
		map.put("password",password);
		List<HashMap<String,Object>> userList = userDao.findByUserId(userId);
		if(userList !=null && userList.size()>0) {
			int r = userDao.updatePassword(map);
			if(r>0) {
				result.setFlag("success");
			}
		}else {
			result.setData("用户信息不存在");
		}
		return result;
	}

	/**
	 * 查询所有用户信息
	 */
	@Override
	public Result userList(String roleId,String name,String startPage,String pageSize) {
		int rId = 0;
		try {
			rId = Integer.parseInt(roleId);
		}catch(Exception e) {
			rId = 0;
		}
		
		int start = 0;
		try {
			start = Integer.parseInt(startPage);
		}catch(Exception e) {
			start = 0;
		}
		int size = 0;
		try {
			size = Integer.parseInt(pageSize);
		}catch(Exception e) {
			size = 10;
		}
		
		HashMap<String,Object> map = new HashMap<String,Object>();
		map.put("roleId", rId);
		map.put("name", name);
		map.put("startPage", (start - 1)*size);
		map.put("pageSize", size);
		
		int total=0;
		List<HashMap<String,Object>> list = new ArrayList<>();
		if(rId == 0) {
			list = userDao.userList(map);
			total = userDao.total(map);
			
		}else {
			list =  userDao.userByPageSizeAndRoleId(map);
			total = userDao.totalByPageSizeAndRoleId(map);
		}
		Page page = new Page(start,size,total);
		Result result = new Result("success",list,page);
		
		return result;
	}
	
	
	
}

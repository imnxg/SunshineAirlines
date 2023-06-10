package com.demo.service;

import java.util.HashMap;
import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.demo.dao.CityDao;
import com.demo.pojo.Result;


@Service
public class CityServiceImpl  implements CityService{
	
	@Resource 
	private CityDao cityDao;
	@Override
	public Result getCityNames() {
		Result result = new Result("success",null);
		List<HashMap<String,Object>> list = cityDao.getCityNames();
		result.setData(list);
		return result;
	}

}

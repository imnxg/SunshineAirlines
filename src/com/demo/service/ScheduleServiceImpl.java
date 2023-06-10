package com.demo.service;

import java.util.HashMap;
import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.demo.dao.ScheduleDao;
import com.demo.pojo.Result;

@Service
public class ScheduleServiceImpl implements ScheduleService{

	@Resource
	private ScheduleDao scheduleDao;
	@Override
	public Result getTicketStatistics(String startDate, String endDate) {
		Result result = new Result("fail",null);
		
		String start = startDate+"-01";
		String end = endDate + "-01";
		System.out.println(start+","+end);
		HashMap<String,Object> map = new HashMap<String,Object>();
		map.put("startDate", start);
		map.put("endDate",end);
		
		List<HashMap<String,Object>> list= scheduleDao.getTicketStatistics(map);
		if(list!=null && list.size()>0) {
			result.setFlag("success");
			result.setData(list);
		}
		return result;
	}
	
	@Override
	public Result getSchedule(String fromCity, String toCity, String startDate, String endDate) {
		Result result = new Result("fail",null);
		String start = startDate;
		String end = endDate;
		System.out.println(start+","+end);
		HashMap<String,Object> map = new HashMap<String,Object>();
		map.put("fromCity", fromCity);
		map.put("toCity",toCity);
		map.put("startDate", start);
		map.put("endDate",end);
		
		List<HashMap<String,Object>> list= scheduleDao.getSchedule(map);
		if(list!=null && list.size()>0) {
			result.setFlag("success");
			result.setData(list);
		}
		return result;
	}
	@Override
	public Result updateSchedule(String scheduleId, String status) {
		Result result = new Result("fail",null);
		
		HashMap<String,Object> map = new HashMap<String,Object>();
		map.put("scheduleId", scheduleId);
		map.put("status",status);

		
		int update= scheduleDao.updateSchedule(map);
		if(update>=1) {
			result.setFlag("success");
		}
		return result;
	}
	
}

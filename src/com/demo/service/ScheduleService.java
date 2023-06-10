package com.demo.service;

import com.demo.pojo.Result;

public interface ScheduleService {

	Result getTicketStatistics(String startDate,String endDate);
	
	//getSchedule?fromCity=Beijing&toCity=Hong Kong&startDate=2019-08-06&endDate=2019-09-06
	Result getSchedule(String fromCity,String toCity,String startDate,String endDate);
	///updateSchedule?scheduleId=1&status=Canceled
	Result updateSchedule(String scheduleId,String status);
}

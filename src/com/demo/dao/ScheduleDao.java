package com.demo.dao;

import java.util.HashMap;
import java.util.List;

public interface ScheduleDao {
	List<HashMap<String, Object>> getTicketStatistics(HashMap<String, Object> map);

	// getSchedule?fromCity=Beijing&toCity=Hong
	// Kong&startDate=2019-08-06&endDate=2019-09-06
	List<HashMap<String, Object>> getSchedule(HashMap<String, Object> map);

	// updateSchedule?scheduleId=1&status=Canceled
	int updateSchedule(HashMap<String, Object> map);
}

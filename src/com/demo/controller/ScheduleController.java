package com.demo.controller;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.demo.service.ScheduleService;

@Controller
@ResponseBody
public class ScheduleController {

	@Resource
	private ScheduleService scheduleService;
	
	@RequestMapping("/getTicketStatistics")
	public Object getTicketStatistics(String startDate, String endDate) {
		return scheduleService.getTicketStatistics(startDate, endDate);
	}
	
	
	@RequestMapping("/getSchedule")
	public Object getSchedule(String fromCity, String toCity, String startDate, String endDate) {
		return scheduleService.getSchedule(fromCity, toCity, startDate, endDate);
	}

	@RequestMapping("/updateSchedule")
	public Object updateSchedule(String scheduleId, String status) {
		return scheduleService.updateSchedule(scheduleId, status);
	}
}

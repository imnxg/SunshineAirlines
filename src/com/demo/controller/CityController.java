package com.demo.controller;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.demo.service.CityService;


@Controller
@ResponseBody
public class CityController {

	@Resource
	private CityService  scheduleService;

	@RequestMapping("/getCityNames")
	public Object getCityNames() {
		return scheduleService.getCityNames();
	}
}

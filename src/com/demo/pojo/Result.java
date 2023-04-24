package com.demo.pojo;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

@JsonInclude(value=Include.NON_NULL)
public class Result {
	private String flag;
	private Object data;
	private Page page;
	public String getFlag() {
		return flag;
	}
	public void setFlag(String flag) {
		this.flag = flag;
	}
	public Object getData() {
		return data;
	}
	public void setData(Object data) {
		this.data = data;
	}
	public Page getPage() {
		return page;
	}
	public void setPage(Page page) {
		this.page = page;
	}
	public Result(String flag, Object data, Page page) {
		super();
		this.flag = flag;
		this.data = data;
		this.page = page;
	}
	public Result(String flag, Object data) {
		super();
		this.flag = flag;
		this.data = data;
	}
	public Result() {
		super();
	}
	
	
	
}

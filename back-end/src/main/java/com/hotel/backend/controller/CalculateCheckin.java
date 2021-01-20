package com.hotel.backend.controller;

import java.util.Calendar;
import java.util.Date;

import com.hotel.backend.model.Checkin;

public class CalculateCheckin {
	
	public double calculate(Checkin checkin) {
		Date weekDays = checkin.getDateIn().setTime(null);
		
		return 0.0;
	}

}

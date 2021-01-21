package com.hotel.backend.controller;

import java.util.Calendar;
import java.util.TimeZone;

import com.hotel.backend.model.Checkin;

public class CalculateCheckin {
	
	public double calculate(Checkin checkin) {
	
		TimeZone zone = TimeZone.getDefault();
		checkin.getDateIn().setTimeZone(zone);
		checkin.getDateOut().setTimeZone(zone);
		
		Checkin dateIn = new Checkin();
		dateIn.setDateIn(checkin.getDateIn());
		
		double total = 0;
		double daysWeek = 0;
		double daysWeekend = 0;
		double taxWeek = 0;
		double taxWeekend = 0;
		
	    for (var i = checkin.getDateIn().get(Calendar.DAY_OF_MONTH); i < checkin.getDateOut().get(Calendar.DAY_OF_MONTH); i++) {
	        if ((checkin.getDateIn().get(Calendar.DAY_OF_WEEK) == 1) || (checkin.getDateIn().get(Calendar.DAY_OF_WEEK) == 7)) {
	        	daysWeekend++;
	            if (checkin.isAddVehicle()) {taxWeekend += 20;}
	        } else {
	            daysWeek++;
	            if (checkin.isAddVehicle()) {taxWeek += 15;}
	        }
	        checkin.getDateIn().add(Calendar.DAY_OF_MONTH, 1);
	    };
	    
	    if ( ((checkin.getDateOut().get(Calendar.HOUR_OF_DAY) >= 16) && (checkin.getDateOut().get(Calendar.MINUTE) >= 31))
	    		|| (checkin.getDateOut().get(Calendar.HOUR_OF_DAY) >= 16) ) {
	        if ((checkin.getDateOut().get(Calendar.DAY_OF_WEEK) == 1) || (checkin.getDateOut().get(Calendar.DAY_OF_WEEK) == 7)) {
	        	daysWeekend++;
	        } else {
	        	daysWeek++;
	        }
	    }
	    
	    checkin.setDateIn(dateIn.getDateIn());
	    total = (daysWeekend * 150) + (daysWeek * 120) + (taxWeek * daysWeek) + (taxWeekend * daysWeekend);	    
		return total;
	}

}

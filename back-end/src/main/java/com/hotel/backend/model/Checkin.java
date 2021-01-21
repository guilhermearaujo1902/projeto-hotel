package com.hotel.backend.model;

import java.io.Serializable;
import java.util.Calendar;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "checkin")
public class Checkin implements Serializable {
	
	private static final long serialVersionUID = 1L;
	
	private long id;
	private Guest guest;
	private Calendar dateIn;
	private Calendar dateOut;
	private boolean addVehicle;
	private double value;
	
	public Checkin() {
	}

	public Checkin(long id, Guest guest, Calendar dateIn, Calendar dateOut, boolean addVehicle) {
		this.id = id;
		this.guest = guest;
		this.dateIn = dateIn;
		this.dateOut = dateOut;
		this.addVehicle = addVehicle;
	}

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	@Column(name = "guest", nullable = false)
	public Guest getGuest() {
		return guest;
	}

	public void setGuest(Guest guest) {
		this.guest = guest;
	}

	@Column(name = "datein", nullable = false)
	public Calendar getDateIn() {
		return dateIn;
	}

	public void setDateIn(Calendar dateIn) {
		this.dateIn = dateIn;
	}

	@Column(name = "dateout", nullable = false)
	public Calendar getDateOut() {
		return dateOut;
	}

	public void setDateOut(Calendar dateOut) {
		this.dateOut = dateOut;
	}

	@Column(name = "addvehicle", nullable = false)
	public boolean isAddVehicle() {
		return addVehicle;
	}

	public void setAddVehicle(boolean addVehicle) {
		this.addVehicle = addVehicle;
	}

	@Column(name = "value", nullable = false)
	public double getValue() {
		return value;
	}

	public void setValue(double value) {
		this.value = value;
	}

	public static long getSerialversionuid() {
		return serialVersionUID;
	}

	@Override
	public String toString() {
		return "Checkin [id=" + id + ", guest=" + guest + ", dateIn=" + dateIn + ", dateOut=" + dateOut
				+ ", addVehicle=" + addVehicle + ", value=" + value + "]";
	}
	
}

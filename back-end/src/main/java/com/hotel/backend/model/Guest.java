package com.hotel.backend.model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "guest")
public class Guest implements Serializable{
	
	private static final long serialVersionUID = 1L;
	
	public long id;
	public String name;
	public String document;
	public String phone;
	
	public Guest() {
	}

	public Guest(long id, String name, String document, String phone) {
		this.id = id;
		this.name = name;
		this.document = document;
		this.phone = phone;
	}

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	@Column(name = "name", nullable = false)
	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	@Column(name = "document", nullable = false)
	public String getDocument() {
		return document;
	}

	public void setDocument(String document) {
		this.document = document;
	}

	@Column(name = "phone", nullable = false)
	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	@Override
	public String toString() {
		return "Guest [id=" + id + ", name=" + name + ", document=" + document + ", phone=" + phone + "]";
	}
	
}

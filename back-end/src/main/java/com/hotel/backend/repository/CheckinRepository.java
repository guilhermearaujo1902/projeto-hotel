package com.hotel.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.hotel.backend.model.Checkin;

public interface CheckinRepository extends JpaRepository<Checkin, Long>{

}

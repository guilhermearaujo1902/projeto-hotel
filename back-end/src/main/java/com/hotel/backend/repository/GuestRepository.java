package com.hotel.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.hotel.backend.model.Guest;

public interface GuestRepository extends JpaRepository<Guest, Long> {

}

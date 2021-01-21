package com.hotel.backend.controller;

import java.util.Calendar;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hotel.backend.exception.ResourceNotFoundException;
import com.hotel.backend.model.Checkin;
import com.hotel.backend.repository.CheckinRepository;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/")
public class CheckinController {

	@Autowired
	private CheckinRepository checkinRepository;
	
	@GetMapping("checkin")
	public List<Checkin> getAll(){
		return checkinRepository.findAll();
	}
	
	@GetMapping("checkin/{id}")
	public ResponseEntity<Checkin> getById(@PathVariable(value = "id") Long id) throws ResourceNotFoundException{
	
		Checkin checkin = checkinRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Checkin not found on this ID :: " + id));
		
		return ResponseEntity.ok().body(checkin);		
	}
	
	@PostMapping("checkin")
	public Checkin create(@Validated @RequestBody Checkin checkin) {
		
		CalculateCheckin calculate = new CalculateCheckin();		
		checkin.setValue(calculate.calculate(checkin));
		return checkinRepository.save(checkin);
	}
	
	@PutMapping("/checkin/{id}")
	public ResponseEntity<Checkin> update(@PathVariable(value = "id") Long id,
	         @Validated @RequestBody Checkin checkinDetails) throws ResourceNotFoundException {
		
		Checkin checkin = checkinRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Checkin not found on this ID :: " + id));

		checkin.setGuest(checkinDetails.getGuest());
		checkin.setDateIn(checkinDetails.getDateIn());
		checkin.setDateOut(checkinDetails.getDateOut());
		checkin.setAddVehicle(checkinDetails.isAddVehicle());
		final Checkin updatedCheckin = checkinRepository.save(checkin);
		return ResponseEntity.ok(updatedCheckin);
	}
	
	@DeleteMapping("/checkin/{id}")
	public Map<String, Boolean> delete(@PathVariable(value = "id") Long id) throws ResourceNotFoundException{
		
		Checkin checkin = checkinRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Checkin not found on this ID :: " + id));
		
		checkinRepository.delete(checkin);
		Map<String, Boolean> response = new HashMap<>();
		response.putIfAbsent("deleted", Boolean.TRUE);
		return response;
	}
	
	
}

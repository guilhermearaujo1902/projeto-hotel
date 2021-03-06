package com.hotel.backend.controller;

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
import com.hotel.backend.model.Guest;
import com.hotel.backend.repository.GuestRepository;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/")
public class GuestController {
	
	@Autowired
	private GuestRepository guestRepository;

	@GetMapping("guest")
	public List<Guest> getAll(){
		return guestRepository.findAll();
	}
	
	@GetMapping("guest/{id}")
	public ResponseEntity<Guest> getById(@PathVariable(value = "id") Long id) throws ResourceNotFoundException{
		
		Guest guest = guestRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Guest not found on this ID :: " + id));
		
		return ResponseEntity.ok().body(guest);		
	}
	
	@PostMapping("guest")
	public Guest create(@Validated @RequestBody Guest guest) {
		return guestRepository.save(guest);
	}
	
	@PutMapping("/guest/{id}")
	public ResponseEntity<Guest> update(@PathVariable(value = "id") Long id,
	         @Validated @RequestBody Guest guestDetails) throws ResourceNotFoundException {
		
		Guest guest = guestRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Guest not found on this ID :: " + id));

		guest.setName(guestDetails.getName());
		guest.setDocument(guestDetails.getDocument());
		guest.setPhone(guestDetails.getPhone());
		final Guest updatedGuest = guestRepository.save(guest);
		return ResponseEntity.ok(updatedGuest);
	}
	
	@DeleteMapping("/guest/{id}")
	public Map<String, Boolean> delete(@PathVariable(value = "id") Long id) throws ResourceNotFoundException{
		
		Guest guest = guestRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Guest not found on this ID :: " + id));
		
		guestRepository.delete(guest);
		Map<String, Boolean> response = new HashMap<>();
		response.putIfAbsent("deleted", Boolean.TRUE);
		return response;
	}
	
}

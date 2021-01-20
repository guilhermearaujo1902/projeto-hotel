package com.hotel.backend.configurations;

import java.util.Arrays;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;

import com.hotel.backend.model.Guest;
import com.hotel.backend.repository.GuestRepository;

@Configuration
@Profile("h2")
public class H2Configuration implements CommandLineRunner{
	
	@Autowired
	private GuestRepository guestRepository;

	@Override
	public void run(String... args) throws Exception {
		Guest g1 = new Guest(1, "João da Silva", "123.456.789-79", "17 98888-8888");
		Guest g2 = new Guest(2, "Maria de Souza", "456.789.123-13", "17 97777-7777");
		Guest g3 = new Guest(3, "Pedro Sauro", "789.123.456-46", "17 96666-6666");
		guestRepository.saveAll(Arrays.asList(g1,g2,g3));
	}

}

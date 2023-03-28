package com.jaydeep.edms;

import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import com.jaydeep.edms.entity.Role;
import com.jaydeep.edms.repository.RoleRepository;

@SpringBootApplication
public class EmployeeDataManagementSystemApplication implements CommandLineRunner{

	@Autowired
	private RoleRepository roleRepository;
	
	public static void main(String[] args) {
		SpringApplication.run(EmployeeDataManagementSystemApplication.class, args);
	
		System.out.println("App Running Fine...");
	}

	@Bean
	public ModelMapper modelMapper() {
		return new ModelMapper();
	}
	
	@Override
	public void run(String... args) throws Exception {
		
		List<Role> roles = List.of(new Role(1, "ROLE_ADMIN"), new Role(2,"ROLE_USER"));
		
		List<Role> savedRoles = roleRepository.saveAll(roles);
		
		System.out.println(savedRoles.get(0)+"   "+ savedRoles.get(1));
		
		
	}

}

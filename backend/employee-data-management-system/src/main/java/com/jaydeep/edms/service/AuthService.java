package com.jaydeep.edms.service;

import java.util.HashSet;
import java.util.Set;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.jaydeep.edms.dto.UserDTO;
import com.jaydeep.edms.entity.Role;
import com.jaydeep.edms.entity.User;
import com.jaydeep.edms.repository.RoleRepository;
import com.jaydeep.edms.repository.UserRepository;

@Service
@Transactional
public class AuthService {
	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private PasswordEncoder passwordEncoder;
	
	@Autowired
	private RoleRepository roleRepository;
	
	public String registerUser(UserDTO userDTO) {
		
		User user = new User();
		
		user.setEmail(userDTO.getEmail());
		user.setPassword(passwordEncoder.encode(userDTO.getPassword()));
		
		Role role = roleRepository.findById(1).get();
		Set<Role> roles = new HashSet<>();
		roles.add(role);
		
		user.setRoles(roles);
		
		userRepository.save(user);
		
		return "USER_REGISTRATION_SUCCESSFUL";
		
	}
}

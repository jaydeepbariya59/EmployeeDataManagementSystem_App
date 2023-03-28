package com.jaydeep.edms.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.jaydeep.edms.entity.Role;

@Repository
public interface RoleRepository extends JpaRepository<Role, Integer>{

}

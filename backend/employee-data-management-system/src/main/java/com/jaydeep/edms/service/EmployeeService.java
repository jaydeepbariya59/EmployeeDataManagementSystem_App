package com.jaydeep.edms.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.jaydeep.edms.dto.EmployeeDTO;
import com.jaydeep.edms.entity.Employee;
import com.jaydeep.edms.exception.EmployeeException;
import com.jaydeep.edms.repository.EmployeeRepository;

@Service
@Transactional
public class EmployeeService {
	
	@Autowired
	private EmployeeRepository employeeRepository;
	
	@Autowired
	private ModelMapper modelMapper;
	
	public List<EmployeeDTO> getAllEmployees() throws EmployeeException{
		
		List<Employee> employees = employeeRepository.findAll();
		
		if(employees.isEmpty()) {
			throw new EmployeeException("Service.NO_EMPLOYEE_EXISTS");
		}
		
		List<EmployeeDTO> employeeDTOs = new ArrayList<>();
		
		employees.forEach((employee)->{
			EmployeeDTO employeeDTO = modelMapper.map(employee, EmployeeDTO.class);
			employeeDTOs.add(employeeDTO);
		});
		
		return employeeDTOs;
	}
	
	
	public EmployeeDTO getEmployeeById(Long id) throws EmployeeException{ 
		
		Optional<Employee> opt = employeeRepository.findById(id);
		Employee employee = opt.orElseThrow(()-> new EmployeeException("Service.NO_EMPLOYEE_WITH_THIS_ID"+id));
		
		return modelMapper.map(employee, EmployeeDTO.class);
		
	}
	
	public EmployeeDTO addEmployee(EmployeeDTO employeeDTO) throws EmployeeException{
		
		Employee employee = employeeRepository.findByEmail(employeeDTO.getEmail());
		
		if(employee!=null) {
			throw new EmployeeException("Service.NO_EMPLOYEE_WITH_THIS_EMAIL");
		}
		
		Employee emp = modelMapper.map(employeeDTO, Employee.class);
		Employee savedEmployee = employeeRepository.save(emp);
		
		return modelMapper.map(savedEmployee, EmployeeDTO.class);
	}
	
	public String deleteEmployeeById(Long id) throws EmployeeException{
		
		Optional<Employee> opt = employeeRepository.findById(id);
		Employee employee = opt.orElseThrow(()-> new EmployeeException("Service.NO_EMPLOYEE_WITH_THIS_ID"+id));

		employeeRepository.delete(employee);
		
		return "EMPLOYEE_WITH_ID_"+id+"DELETED_SUCCESSFULLY";
	}
	
	public String deleteAllEmployees() throws EmployeeException{
		List<Employee> employees = employeeRepository.findAll();
		
		if(employees.isEmpty()) {
			throw new EmployeeException("Service.NO_EMPLOYEE_EXISTS");
		}
		
		employeeRepository.deleteAll();
		
		return "ALL_EMPLOYEE_DATA_DELETED_SUCCESSFULLY";
	}
	
	public EmployeeDTO updateEmployeeById(Long id, EmployeeDTO employeeDTO) throws EmployeeException{
		
		Optional<Employee> opt = employeeRepository.findById(id);
		Employee employee = opt.orElseThrow(()-> new EmployeeException("Service.NO_EMPLOYEE_WITH_THIS_ID"+id));
		
		if(employeeDTO.getFirstName().trim()!="") {
			employee.setFirstName(employeeDTO.getFirstName());
		}
		
		if(employeeDTO.getLastName().trim()!="") {
			employee.setLastName(employeeDTO.getLastName());
		}
		
		if(employeeDTO.getEmail().trim()!="") {
			employee.setEmail(employeeDTO.getEmail());
		}
		
		if(employeeDTO.getDept().trim()!="") {
			employee.setDept(employeeDTO.getDept());
		}
		
		if(employeeDTO.getFirstName().trim()!="") {
			employee.setFirstName(employeeDTO.getFirstName());
		}
		
		if(employeeDTO.getSalary()!=0) {
			employee.setSalary(employeeDTO.getSalary());
		}
		
		Employee saved = employeeRepository.save(employee);
		
		return modelMapper.map(saved, EmployeeDTO.class);
	}
}













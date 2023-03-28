package com.jaydeep.edms.utility;

import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import javax.servlet.http.HttpServletRequest;
import javax.validation.ConstraintViolation;
import javax.validation.ConstraintViolationException;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import com.jaydeep.edms.exception.EmployeeException;

@RestControllerAdvice
public class GlobalExceptionHandling {
	
	@ExceptionHandler(EmployeeException.class)
	public ResponseEntity<ErrorInfo> handleEmployeeException(EmployeeException e){
		
		ErrorInfo errorInfo = new ErrorInfo();
		
		errorInfo.setCode(HttpStatus.BAD_REQUEST.value());
		errorInfo.setMsg(e.getMessage());
		errorInfo.setTimeStamp(LocalDateTime.now());
		
		return new ResponseEntity<ErrorInfo>(errorInfo, HttpStatus.BAD_REQUEST);
	}
	
    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<Map<String, String>> handleValidationExceptions(
            MethodArgumentNotValidException ex) {
        Map<String, String> errors = new HashMap<>();
        ex.getBindingResult().getAllErrors().forEach((error) -> {
            String fieldName = ((FieldError) error).getField();
            String errorMessage = error.getDefaultMessage();
            errors.put(fieldName, errorMessage);
        });
        return ResponseEntity.badRequest().body(errors);
    }
    
    
    @ExceptionHandler(ConstraintViolationException.class)
    public ResponseEntity<Map<String, String>> handleConstraintException(ConstraintViolationException e){
    	
    	Map<String, String> errors = new HashMap<>();
    	
    	e.getConstraintViolations().forEach((e1) -> {
    		errors.put((String) e1.getInvalidValue(), e1.getMessage());
    		
    	});
    	
    	return new ResponseEntity<Map<String,String>>(errors, HttpStatus.BAD_REQUEST);
    }
    
}

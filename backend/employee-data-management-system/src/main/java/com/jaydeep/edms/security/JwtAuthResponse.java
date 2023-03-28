package com.jaydeep.edms.security;

public class JwtAuthResponse {
	
	private String token;
	private String username;
	
	public JwtAuthResponse(String token, String username) {
		super();
		this.token = token;
		this.username = username;
	}

	public JwtAuthResponse() {
		super();
	}

	public String getToken() {
		return token;
	}

	public void setToken(String token) {
		this.token = token;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	@Override
	public String toString() {
		return "JwtAuthResponse [token=" + token + ", username=" + username + "]";
	}
	
	
	
}

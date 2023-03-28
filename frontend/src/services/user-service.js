import axios from 'axios';

export const BASE_URL = "http://localhost:8100";

//userLogin

export const userLogin = (loginData) =>{
    return axios.post(BASE_URL+"/auth/loginUser", loginData)
                .then((response)=> response.data);
}

// registerUser

export const userSignUp = (signUpData) =>{
    return axios.post(BASE_URL+"/auth/registerUser", signUpData)
                .then((response) => response.data);
}
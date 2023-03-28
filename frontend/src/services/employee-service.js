import axios from 'axios';
import {getToken} from './helper-service';
import {BASE_URL} from './user-service';

export const getAllEmployees = ()=>{
    return axios.get(BASE_URL+"/employees", {headers : {"Authentication": getToken()}})
            .then((response)=> response.data);
}

export const deleteEmployee = (id)=>{
    return axios.delete(BASE_URL+"/employees/"+id, {headers : {"Authentication": getToken()}})
            .then((response)=> response.data);
}

export const addEmployee = (employee)=>{
    return axios.post(BASE_URL+"/employees", employee, {headers : {"Authentication": getToken()}})
            .then((response)=> response.data);
}

export const deleteAllEmployees = () =>{
    return axios.delete(BASE_URL+"/employees",{headers : {"Authentication": getToken()}})
            .then((response)=> response.data);
}

export const updateEmployee = (id, employee) =>{
    return axios.put(BASE_URL+"/employees/"+id, employee, {headers : {"Authentication": getToken()}})
            .then((response)=> response.data);
}

export const getOneEmployee = (id) =>{
    return axios.get(BASE_URL+"/employees/"+id, {headers : {"Authentication": getToken()}})
    .then((response)=> response.data);
}
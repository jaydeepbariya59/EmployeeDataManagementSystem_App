import React, { useEffect, useState } from "react";
import {useNavigate, useParams} from 'react-router-dom';
import {getOneEmployee} from '../services/employee-service';

const OneEmployee = () => {
  const params = useParams();

  const navigate = useNavigate();

  const [employee, setEmployee] = useState({
    firstName: "",
    lastName: "",
    email: "",
    dept: "",
    salary: "",
  });

  useEffect(()=>{
    getOneEmployee(params.id)
        .then((response)=>{
            setEmployee(response);
        })
        .catch((error)=>{
            console.log(error);
        });
  },[]);

  return (
    <div>
        <div className="container w-50" style={{marginTop:"100px", marginBottom:"100px"}}>
            <div className="card-body">
                <ul className="list-group p-4 border border-info">
                    <li className="list-group-item">EmpId : {employee.id}</li>
                    <li className="list-group-item">First Name : {employee.firstName}</li>
                    <li className="list-group-item">Last Name : {employee.lastName}</li>
                    <li className="list-group-item">Email : {employee.email}</li>
                    <li className="list-group-item">Dept : {employee.dept}</li>
                    <li className="list-group-item">Salary : {employee.salary}</li>
                </ul>

                <button className="btn btn-info m-4" onClick={()=> navigate(-1)}>Go Back</button>
            </div>
        </div>
    </div>
  );
};

export default OneEmployee;

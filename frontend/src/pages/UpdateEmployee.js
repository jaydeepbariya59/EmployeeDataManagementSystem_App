import React, { useState } from 'react';
import {useParams} from 'react-router-dom';
import {updateEmployee} from '../services/employee-service';
import {toast, ToastContainer} from 'react-toastify';

const UpdateEmployee = () => {

    const [employee, setEmployee] = useState({
        "firstName" : "",
        "lastName" : "",
        "email" : "",
        "dept" : "",
        "salary" : ""
    });

    const params = useParams();

    const handleChange = (field, e) =>{
        setEmployee({...employee, [field] : e.target.value});
    }

    const submitForm = (e) =>{
        e.preventDefault();

        updateEmployee(params.id, employee)
            .then((response) => {
                toast.success("Employee Updated Successfully");
            })
            .catch((error) =>{
                toast.error("Some Error Occured");
            });
    }

    const resetForm = () =>{
        setEmployee({
            "firstName" : "",
            "lastName" : "",
            "email" : "",
            "dept" : "",
            "salary" : ""
        });
    }

  return (
    <div>
        <div className='container w-50' style={{marginTop: "100px", marginBottom : "100px"}}>
            <div className='card shadow p-3 mb-5 bg-body rounded'>
                <div className='card-header bg-info'>
                    Update Employee Form
                </div>

                <div className='card-body'>
                    <h5 className='card-title'>If don't want to change particular field leave it blank</h5>

                    <form onSubmit={(e)=> submitForm(e)}>
                    <div className="mb-3">
                        <label htmlFor="firstName">First Name : </label>
                        <input type="text" className="form-control" id="firstName" aria-describedby="firstName" placeholder="Enter First Name" 
                            value={employee.firstName} 
                            onChange = {(e)=> handleChange("firstName", e)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="lastName">Last Name : </label>
                        <input type="text" className="form-control" id="lastName" aria-describedby="lastName" placeholder="Enter Last Name" 
                            value={employee.lastName} 
                            onChange = {(e)=> handleChange("lastName", e)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email">Email : </label>
                        <input type="email" className="form-control" id="email" aria-describedby="email" placeholder="Enter Email Name" 
                            value={employee.email} 
                            onChange = {(e)=> handleChange("email", e)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="dept">Department : </label>
                        <input type="text" className="form-control" id="dept" aria-describedby="dept" placeholder="Enter Department Name" 
                            value={employee.dept} 
                            onChange = {(e)=> handleChange("dept", e)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="salary">Salary : </label>
                        <input type="number" className="form-control" id="salary" aria-describedby="salary" placeholder="Enter Salary Name" 
                            value={employee.salary} 
                            onChange = {(e)=> handleChange("salary", e)}
                        />
                    </div>

                    <div className="row">
                        <div className="col">
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </div>
                        <div className="col">
                            <button type="reset" className="btn btn-danger" onClick={resetForm}>Reset</button>
                        </div>

                        <ToastContainer />
                    </div>
                </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default UpdateEmployee
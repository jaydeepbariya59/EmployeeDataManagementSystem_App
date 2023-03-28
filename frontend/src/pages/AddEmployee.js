import React,{useState} from "react";
import {toast, ToastContainer} from 'react-toastify';
import {addEmployee} from '../services/employee-service';

const AddEmployee = () => {
  const [employee, setEmployee] = useState({
    firstName: "",
    lastName: "",
    email: "",
    dept: "",
    salary: "",
  });

  const handleChange = (field, event) => {
    setEmployee({ ...employee, [field]: event.target.value });
  };

  const submitForm = (e) => {
    e.preventDefault();

    addEmployee(employee)
      .then((response) => {
        toast.success("Employee Added Successfully...");
      })
      .catch((error) => {
        toast.error("Some error occured...");
        console.log(error);
      });
  };

  const resetForm = () => {
    setEmployee({
      firstName: "",
      lastName: "",
      email: "",
      dept: "",
      salary: "",
    });
  };

  return (
    <div className="container w-50" style={{marginTop : "100px", marginBottom : "100px"}}>
        <div className="card shadow p-3 mb-5 bg-body rounded">
            <div className="card-header bg-info">
                Add New Employee
            </div>

            <div className="card-body">
                <h5 className="card-title">Add Data As A New Employee Record..</h5>

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
                        <input type="email" className="form-control" id="email" aria-describedby="email" placeholder="Enter Email" 
                            value={employee.email} 
                            onChange = {(e)=> handleChange("email", e)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="dept">Department : </label>
                        <input type="text" className="form-control" id="dept" aria-describedby="dept" placeholder="Enter Department" 
                            value={employee.dept} 
                            onChange = {(e)=> handleChange("dept", e)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="salary">Salary : </label>
                        <input type="number" className="form-control" id="salary" aria-describedby="salary" placeholder="Enter Salary" 
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
  );
};

export default AddEmployee;

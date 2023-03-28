import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { deleteEmployee, getAllEmployees } from "../services/employee-service";
import { deleteAllEmployees } from "../services/employee-service";

const AllEmployees = () => {
  const [employees, setEmployees] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    getAllEmployees()
      .then((response) => {
        setEmployees(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const goForUpdate = (id) => {
    navigate("/user/update-employee/" + id);
  };

  const goForAddition = () => {
    navigate("/user/add-employee");
  };

  const goForDelete = (id) => {
    const res = window.confirm("Are You Sure ?");

    if (res) {
      deleteEmployee(id)
        .then((response) => {
          toast.success("Employee Deleted Successfully");

          getAllEmployees()
            .then((response) => {
              setEmployees(response);
            })
            .catch((error) => {
              console.log(error);
            });
        })
        .catch((error) => {
          toast.error("Deletion Not Successful");
        });
    } else {
      alert("Thanks for letting us know");
    }
  };

  const goForDeletionAll = () => {

    const res = window.confirm("Are You Sure ??");

    if(res){
        deleteAllEmployees()
      .then((response) => {
        toast.success("All Employees Deleted...");
        getAllEmployees()
        .then((response) => {
          setEmployees(response);
        })
        .catch((error) => {
          console.log(error);
        });
      })
      .catch((error) => {
        toast.error("Some Error Occured...");
      });
    }
    else{
        return;
    }

    
  };

  const goForDetails = (id) => {
    navigate("/user/all-employee/" + id);
  };

  return (
    <div
      className="container text-center"
      style={{ marginTop: "100px", marginBottom: "100px" }}
    >
      <div className="col">
        <div className="mx-auto">
          <button className="btn btn-info mb-4" onClick={goForAddition}>
            Add New Employee
          </button>
          <button
            className="btn btn-danger mx-4 mb-4"
            onClick={goForDeletionAll}
          >
            Delete All Employees
          </button>
        </div>

        <table className="table table-info table-striped border border-success">
          <thead>
            <td scope="col">Id</td>
            <td scope="col">First Name</td>
            <td scope="col">Last Name</td>
            <td scope="col">Email</td>
            <td scope="col">Dept</td>
            <td scope="col">Salary</td>
            <td scope="col">Update</td>
            <td scope="col">Delete</td>
            <td scope="col">See In Detail</td>
          </thead>

          <tbody>
            {employees.map((e, i) => {
              return (
                <tr key={i} className="border border-success">
                  <td>{e.id}</td>
                  <td>{e.firstName}</td>
                  <td>{e.lastName}</td>
                  <td>{e.email}</td>
                  <td>{e.dept}</td>
                  <td>{e.salary}</td>
                  <td>
                    <button
                      className="btn btn-warning"
                      onClick={() => goForUpdate(e.id)}
                    >
                      UPDATE
                    </button>
                  </td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => goForDelete(e.id)}
                    >
                      DELETE
                    </button>
                  </td>
                  <td>
                    <button
                      className="btn btn-success"
                      onClick={() => goForDetails(e.id)}
                    >
                      DETAILS
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <ToastContainer />
      </div>
    </div>
  );
};

export default AllEmployees;

import React, { useEffect } from "react";
import { useState } from "react";
import { deleteEmployee, listEmployees } from "../services/EmployeeService";
import { useNavigate, useParams } from "react-router-dom";

const ListEmployeeComponent = () => {
  const [employees, setEmployees] = useState([]);
  const navigator = useNavigate();

  useEffect(() => {
    getallEmployees();
  }, []);

  function getallEmployees() {
    listEmployees()
      .then((response) => {
        setEmployees(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  function AddNewEmployee() {
    navigator("/add-employee");
  }

  function updateEmployee(id) {
    navigator(`/update-employee/${id}`);
  }

  function handledeleteEmployee(id) {
    deleteEmployee(id)
      .then((response) => {
        console.log(response.data);
        getallEmployees();
        // navigator("/employees");
      })
      .catch((error) => {
        console.error("Error deleting employee:", error);
      });
  }

  return (
    <div className="container">
      <button className="btn btn-primary" onClick={AddNewEmployee}>
        Add Employee
      </button>
      <br />
      <br />
      <h2 className="text-center"> List Of Employees</h2>
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>Employee Id</th>
            <th>Employee FirstName </th>
            <th>Employee LastName </th>
            <th>Employee Email </th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.firstName}</td>
              <td>{employee.lastName}</td>
              <td>{employee.email}</td>
              <td>
                <button
                  className="btn"
                  onClick={() => updateEmployee(employee.id)}
                >
                  Update
                </button>
                <button
                  className="btn"
                  onClick={() => handledeleteEmployee(employee.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListEmployeeComponent;

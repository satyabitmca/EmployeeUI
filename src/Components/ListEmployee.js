import React, { Component } from "react";
import { Table, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../index.css";
import EmployeeService from "./Services";

var divStyle = {
  margin: "3% 3%",
};

class ListEmployee extends Component {
  constructor(props) {
    super(props);
    this.employeeService = new EmployeeService();
    this.state = { employees: [] };
    this.deleteEmployee = this.deleteEmployee.bind(this);
  }

  componentDidMount = () => {
    this.getEmployeeList();
  };

  // To get all the employees
  getEmployeeList() {
    this.employeeService
      .getEmployeeList()
      .then((response) => {
        console.log(response);
        this.setState({
          employees: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  deleteEmployee = (empid) => {
    if (window.confirm("Are you sure you wish to delete this item?")) {
      this.employeeService
        .deleteEmployee(empid)
        .then(() => {
          this.getEmployeeList();
          console.log("Employee Deleted !!!");
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  render() {
    const { employees } = this.state;

    return (
      <div style={divStyle}>
        <div>
          <h3>Employee Details</h3>
          <Table responsive>
            <thead>
              <tr>
                <th>Id</th>
                <th>First name</th>
                <th>Last name</th>
                <th>Middle name</th>
                <th>Age</th>
                <th>Gender</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {employees &&
                employees.map((employee, i) => {
                  return (
                    <tr key={i}>
                      <td>{employee.id}</td>
                      <td>{employee.firstName}</td>
                      <td>{employee.lastName}</td>
                      <td>{employee.middleName}</td>
                      <td>{employee.age}</td>
                      <td>{employee.gender}</td>
                      <td>
                        <Link
                          to={"editemployee/" + employee.id}
                          className="btn btn-primary"
                        >
                          Edit
                        </Link>
                      </td>
                      <td>
                        <Button
                          onClick={() => this.deleteEmployee(employee.id)}
                        >
                          Delete
                        </Button>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </Table>
        </div>       
      </div>
    );
  }
}

export default ListEmployee;

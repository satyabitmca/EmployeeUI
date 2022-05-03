import React, { Component } from "react";
import Select from "react-select";
import EmployeeService from "./Services";
import "../index.css";

class AddEmployee extends Component {
  constructor(props) {
    super(props);
    this.employeeService = new EmployeeService();
    this.state = {
      id: "",
      firstname: "",
      lastname: "",
      middlename:"",
      age:0,
      gender:""
    };
  }
  
  handleChangeCancle =() => {
    window.history.back();
  }

  // When value changes of the fields
  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  // To add new employee when user submits the form
  handleSubmit = (event) => {
    event.preventDefault();
    const { firstname, lastname, middlename, age, gender } = this.state;

    this.employeeService
      .postEmployeeOnAddButton(firstname, lastname, middlename, age, gender)
      .then((response) => {
        console.log(response);
        this.props.history.push("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
  
    return (
      <div className="container">
        <form id="formid" className="formid" onSubmit={this.handleSubmit}>
          <label>
            First name
            <input
              required
              name="firstname"
              type="text"
              value={this.state.firstname}
              onChange={this.handleChange}
              className="form-control"
            />
          </label><br/>
          <label>
            Last name
            <input
              required
              name="lastname"
              type="text"
              value={this.state.lastname}
              onChange={this.handleChange}
              className="form-control"
            />
          </label>
          <br/>
          <label>
            Middle name
            <input              
              name="middlename"
              type="text"
              value={this.state.middlename}
              onChange={this.handleChange}
              className="form-control"
            />
          </label>
          <br/>
          <label>
            age
            <input
              required
              name="age"
              type="text"
              value={this.state.age}
              onChange={this.handleChange}
              className="form-control"
            />
          </label>
          <br/>
          <label>
            Gender
            <input
              required
              name="gender"
              type="text"
              value={this.state.gender}
              onChange={this.handleChange}
              className="form-control"
            />
          </label>
          <br/>
          <input type="submit" value="Create Employee" className="btn btn-primary" />
          <input type="submit" value="Cancle" className="btn btn-primary" onClick={this.handleChangeCancle} />
        </form>
      </div>
    );
  }
}

export default AddEmployee;

import React, { Component } from "react";
import {Prompt} from 'react-router-dom'

import EmployeeService from "./Services";
import "../index.css";

class EditEmployee extends Component {
  constructor(props) {
    super(props);
    this.employeeService = new EmployeeService();
    window.onbeforeunload = this.handleOnBeforeUnload
    this.state = {
      id: "",
      firstname: "",
      lastname: "",
      middlename:"",
      age:0,
      gender:"",
      isDirty: false
    
    };

    // window.onbeforeunload = () => {    
    //   if(!this.state.isDirty)
    //   {
    //     return "You have not saved your changes";
    //   }
    // };
  
  }

 

  componentDidMount = () => {
    this.getEmployeeById();
  };

  handleChangeCancle =() => {
    window.history.back();
  }

  // To get employee based on ID
  getEmployeeById() {
    this.employeeService
      .getEmployeeById(this.props.match.params.id)
      .then((response) => {
        this.setState({
          id: response.data.id,
          firstname: response.data.firstName,
          lastname: response.data.lastName,
          middlename:response.data.middleName,
          age: response.data.age,
          gender:response.data.gender
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value}); 
  };

  // To update the record on submit
  handleSubmit = (event) => {
    event.preventDefault();
    const { id, firstname, lastname, middlename, age, gender } = this.state;

    this.employeeService
      .postEmployeeOnEditSubmit(this.props.match.params.id,firstname,lastname,middlename,age,gender)
      .then((response) => {
        console.log(response);
        this.props.history.push("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  logicToPrompt = () => {
     if(this.state.firstname.length !== 0 || this.state.lastname.length !== 0 || this.state.age.length !== 0 ||
   this.state.gender.length !== 0)
    {
      this.setState({isDirty:true})
     return true
    }       
  }

  render() {
    return (

      <div className="container">
        {/* <Prompt when={true } message="Are you sure you want to leave the page?" /> */}
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
          </label>
          <br />      
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
          <br /> 
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
          <br />
          <label>
            Age
            <input
              required
              name="age"
              type="text"
              value={this.state.age}
              onChange={this.handleChange}
              className="form-control"
            />
          </label>
          <br />  
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
          <br />   
          <input type="submit" value="Edit Employee" className="btn btn-primary" />
          <input type="submit" value="Cancle" className="btn btn-primary" onClick={this.handleChangeCancle} />

        </form>
        </div>
    );
  }
}

export default EditEmployee;

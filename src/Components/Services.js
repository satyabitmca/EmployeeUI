import axios from "axios";
import { API_URL } from "../Config";

class EmployeeService {
 
  getEmployeeById = (id) => {
    return axios.get(`${API_URL}employee/${id}`);
  };

  getEmployeeList = () => {
    return axios.get(`${API_URL}employee`);
  };
 
  postEmployeeOnEditSubmit = (urlId, firstName, lastName, middleName,age, gender) => {
    return axios.patch(`${API_URL}employee`, {
      id: urlId,
      firstName: firstName,
      lastName: lastName,
      middleName:middleName,      
      age: Number(age),
      gender:gender
    });
  };

  postEmployeeOnAddButton = (firstname, lastname,middleName,age,gender) => {
    return axios.post(`${API_URL}employee`, {
      firstname: firstname,
      lastname:lastname,
      middlename:middleName,      
      age: Number(age),
      gender: gender
    });
  };

 
  deleteEmployee(id) {
    return axios.delete(`${API_URL}employee/${id}`);
  } 

}

export default EmployeeService;

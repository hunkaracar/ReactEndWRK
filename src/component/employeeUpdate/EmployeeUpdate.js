import React, { useContext } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import AppContext from "../context/AppContext";

function EmployeeUpdate() {

  const navigate = useNavigate();
  const {id} = useParams();
  console.log(id)

  const { employee, setList, SelectedEmployee, setSelectedEmployee } =
    useContext(AppContext);
  const handleChange = (e) => {
    setSelectedEmployee({
      ...SelectedEmployee,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (SelectedEmployee.id === 0) {
      window.alert("Öncelikle bir Employee seçmelisiniz");
    } else {
      setList([
        ...employee.filter((emp) => emp.id !== SelectedEmployee.id),
        SelectedEmployee,
      ]);
      navigate("/employees")
    }
  };
  return (
    <div>
      <h3>Employee Update</h3>
      <p>{JSON.stringify(SelectedEmployee)}</p>
      <form onSubmit={handleSubmit}>
        <input
          id="firstName"
          name="firstName"
          onChange={handleChange}
          value={SelectedEmployee.firstName}
          type={"text"}
          placeholder="First Name"
        />
        <input
          id="lastName"
          name="lastName"
          onChange={handleChange}
          value={SelectedEmployee.lastName}
          type={"text"}
          placeholder="Last Name"
        />
        <button type="submit">Update</button>
      </form>
    </div>
  );
}
export default EmployeeUpdate;

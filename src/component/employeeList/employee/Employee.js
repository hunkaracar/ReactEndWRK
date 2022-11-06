import React from "react";
import { useNavigate } from "react-router-dom";

function Employee({ employee, handleRemove, setSelectedEmployee }) {

  const navigate = useNavigate();


  const handleSelectedEmployee = (emp) => {
    setSelectedEmployee(emp);
    navigate(`/employees/uptade/${emp.id}`)
  };
  return (
    <div key={employee.id}>
      {employee.firstName} {employee.lastName}
      <button onClick={() => handleRemove(employee.id)}>Remove</button>
      <button onClick={() => handleSelectedEmployee(employee)}>Select</button>
    </div>
  );
}

export default Employee;

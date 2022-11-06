import React from "react";
import { data } from "../../data/data";

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [employee, setList] = React.useState(data);
  const [SelectedEmployee, setSelectedEmployee] = React.useState({
    id: 0,
    firstName: "",
    lastName: "",
  });
  const values = {
    employee,
    setList,
    appName: "Employee App",
    setSelectedEmployee,
    SelectedEmployee,
  };

  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
};

export default AppContext;

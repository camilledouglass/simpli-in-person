import React from 'react';
import EmployeeDetails from './EmployeeDetails';

function EmployeeList(props) {
  var employees = props.employees;
  var category= props.category;
  return (
    <div>
    <h2>List of {category}</h2>
    {employees.map(e=> <EmployeeDetails e={e} />)}
    </div>
  )
}

export default EmployeeList;
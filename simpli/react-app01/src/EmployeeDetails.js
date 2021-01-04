import React from 'react';

function EmployeeDetails(props) {
  var e = props.e;
  return (
    <div>
      Id: {e.id}, Name: {e.name}, Job: {e.job}, Salary: {e.salary}
    </div>
  )
}

export default EmployeeDetails;
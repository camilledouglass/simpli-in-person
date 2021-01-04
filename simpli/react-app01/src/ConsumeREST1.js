import React, { Component } from 'react';

class ConsumeREST1 extends Component {
  state={employees:[]};
  getEmployeesFromAPI(){
    var url='http://localhost:3001/employees';
    fetch(url)
    .then(response=>response.json())
    .then(response => this.setState({employees:response}));
  }
  render() {
    this.getEmployeesFromAPI();
    var employees=this.state.employees;
    return (
      <div>
        <h1> Consume RESTful Service Demo</h1>
        {JSON.stringify(employees)}
      </div>
    );
  }
}

export default ConsumeREST1;
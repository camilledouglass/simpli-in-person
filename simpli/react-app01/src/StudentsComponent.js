import React from 'react';

class StudentsComponent extends React.Component{
  state={
    students:[
      {"id":1001, "sname": "Jesus","course":"Communications", "fee":0},
      {"id":1002, "sname": "Jose","course":"Engineering", "fee":25},
      {"id":1003, "sname": "Maria", "course":"Early Childhood Development", "fee":15},
    ], stud:{"id": 0, "sname":'', "course":"", "fee":0}
  };
  getRowById(id){
    var s = this.state.students.find(x=>x.id===id);
    this.setState({stud:s});
}
deleteRowById(id){
  var index = this.state.students.findIndex(x=>x.id===id);
  var students = this.state.students;
  if (window.confir)
}
render() {
    return (
        <div>
            <h1>Students Component</h1>
            <table border="1">
                <tr>
                    <th>Id</th> <th>Name of the Student</th> <th>Course</th><th>Fee</th>
                    <th>Operations</th>
                </tr>
                {this.state.students.map(s=>
                    <tr>
                        <td>{s.id}</td><td>{s.sname}</td><td>{s.course}</td><td>{s.fee}</td>
                        <td><button onClick={()=>this.getRowById(s.id)}
                        >Select</button></td>
                    </tr>)}                     
            </table>
            Id: {this.state.stud.id} <br/>
            Name: {this.state.stud.sname} <br/>
            Course: {this.state.stud.course} <br/>
            Fee: {this.state.stud.fee} <br/>
        </div>
    );
}
}

export default StudentsComponent;

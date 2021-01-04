import React, { Component } from 'react';

class MyComponent5 extends Component {
  t1=React.createRef( );
  state={gender:''};
  choiceHandler(op){
    this.setState({gender:op});
  }
  display(){
    var name = this.t1.current.value;
    var msg='';
    if (this.state.gender==='m')
    msg=`Hello Mr. ${name}`;
    else if (this.state.gender==='f')
    msg= `Hello Ms. ${name}`;
  }
  render() {
    return (
      <div>
        
      </div>
    );
  }
}

export default MyComponent5;
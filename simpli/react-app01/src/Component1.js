import React from 'react';
import {increment,decrement} from './reduxStore1';
import store from './reduxStore1';
class Component1 extends React.Component{
    constructor(props){
        super(props);
        this.state={msg:''};
    }
    increment(){
        store.dispatch(increment());
        this.setState({msg:store.getState()});
    }
    decrement(){
        store.dispatch(decrement());
        this.setState({msg:store.getState()});
    }
    render() {
        return (
            <div>
                <h1>Redux Consume Component</h1>
                Props: {this.props.msg} <hr/>
                Redux Store value: {this.state.msg} <hr/>
                <button onClick={()=>this.increment()}>Increment</button> |
                <button onClick={()=>this.decrement()}>Decrement</button>  <hr/>
            </div>
        );
    }
}
export default Component1;

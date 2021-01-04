import React from 'react';
import ReactDOM from 'react-dom';
 
class FirstComponent extends React.Component{
    
    render(){        
        return <div>
        <h1>First  Component </h1>
        
        </div>
    }
}
 
class LifeCycleDemo1 extends React.Component{
    mountFirst(){
        ReactDOM.render(<FirstComponent />,document.getElementById("root"));
    }    
    componentDidMount(){
        console.log( 'component mounted at '+new Date().toLocaleTimeString() );
    }
    componentWillUnmount(){
        console.log( 'component umounted at '+new Date().toLocaleTimeString() );
    }
    
    render(){        
        return <div>
        <h1>LifeCycleDemo1 Component</h1>
        <button onClick={()=>this.mountFirst()}>Mount First Component</button>
        </div>
    }
}
export default LifeCycleDemo1;
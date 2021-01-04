import React from 'react';
import { BrowserRouter as Router,Route, Switch,Link, Redirect } from 'react-router-dom';
 
class RoutingDemo extends React.Component{
    render(){
        return ( <div className="container GreenBorder">            
                <h2>Router Demo, Ex-02  </h2>
            <Router>
            <Link to="/">Root</Link> | 
                <Link to="/about">About</Link> | 
                <Link to="/contact">Contact</Link> 
              <div>
            <Switch>
                <Route path="/" exact  render={
                  ()=>{
                    return (<h1>Root (instant) Component </h1>)
                  }
                }/>
                 <Route path="/about" render={
                  ()=>{
                    return (<h1>Welcome to About instant component</h1>)
                  }
                }/>
                 <Route path="/contact" render={
                  ()=>{
                    return (<h1>Welcome to Contact instant component</h1>)
                  }
                }/>
            </Switch>
              </div>
            </Router>
            </div>
        );
    }
 
}
export default RoutingDemo;

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

import Component1 from './Component1';

ReactDOM.render(
  <React.StrictMode>
     <Component1 />
  </React.StrictMode>,
  document.getElementById('root')
);
// var element = <h1>Got My Vans On But They Look Like Sneakers</h1>
// var container = document.getElementById('root');
// ReactDOM.render(element, container);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

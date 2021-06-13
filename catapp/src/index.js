import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Login from './Login'
import PageNotFound from './PageNotFound';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

ReactDOM.render(
  <Router>
         <Switch>
    <Route exact path="/" component = {App} />
    <Route path="/Login" component = {Login} />
    <Route component={PageNotFound}/>
    </Switch>

  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

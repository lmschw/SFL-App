import React,{ Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import { Home } from "./Home";
import { AllTest } from './AllTest';
import {  Profile } from './Profile';
import { Layout } from './Layout';
import { NoMatch } from './NoMatch';

class App extends Component {
  render(){
    return (
      <React.Fragment>  
        <Layout>
          <Router>
            <Switch> 
             /* React routing links here */
            <Route exact path = "/" component = {Home}></Route>
            <Route path = "/AllTest" component = {AllTest}></Route>
            <Route path = "/Profile" component = {Profile}></Route>
            <Route component = {NoMatch} />
            </Switch>
          </Router>
        </Layout>
      </React.Fragment>
    )
  }
}

export default App;

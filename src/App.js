import React,{ Component, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import  Home  from "./Home";
import { AllTest } from './AllTest';
import {  Profile } from './Profile';
import { Layout } from './Layout';
import { NoMatch } from './NoMatch';
import SignIn from './auth/signIn';
import Signup from './auth/signUp';
import { CircularProgress } from '@material-ui/core';
import firebase from './firebase';
import Dashboard from './Dashboard';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      firebaseInitialized : false
    };
  }
  

  componentDidMount(){
      firebase.isInitialized().then(val =>{
          this.setState({
            firebaseInitialized:val
          })
      })
  };


  render(){
      return this.state.firebaseInitialized !== false ?(
        <React.Fragment>  
          <Layout>
            <Router>
              <Switch> 
              <Route exact path = "/" component = {Home}></Route>
              <Route path="/dashboard" component = {Dashboard}></Route>
              <Route path="/signin" component = {SignIn}></Route>
              <Route path = "/signup" component = {Signup}></Route>
              <Route path = "/AllTest" component = {AllTest}></Route>
              <Route path = "/Profile" component = {Profile}></Route>
              <Route component = {NoMatch} />
              </Switch>
            </Router>
          </Layout>
        </React.Fragment>
      ): <div id="loader"><CircularProgress /></div>
    }
}

export default App;

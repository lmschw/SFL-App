import React,{ Component } from 'react';
import {withRouter} from 'react-router-dom';
import firebase from './firebase';
import Dashboard from './Dashboard';
function Home(props){

    return(
/** note most components are placed inside the StickFooter component*/
        <div>
             <Dashboard />
        </div>       

    );
}

export default withRouter(Home)
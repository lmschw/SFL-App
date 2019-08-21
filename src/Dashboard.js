import React,{ Component } from 'react';
import  StickFooter  from './components/StickyFooter';
import {withRouter} from 'react-router-dom';

function Dashboard(props){

    return(
/** note most components are placed inside the StickFooter component*/
        <div>
                <StickFooter />
        </div>       

    );
}

export default withRouter(Dashboard)
import React,{ Component } from 'react';
import { Layout } from './Layout';
import  StickFooter  from './components/StickyFooter';

export const Home = () =>(
   

/** note most components are placed inside the StickFooter component*/
<React.Fragment>

<Layout>
    <StickFooter/>
</Layout>
</React.Fragment>

)
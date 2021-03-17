import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Home  from '../Pages/Home';
import About from '../Pages/About';
import Contact  from '../Pages/Contact';

class Routers extends React.Component{
    render(){
    return(
        <Switch>
                <Route exact path="/" component={Home}/>                   
                <Route path="/about-us" component={About}/>                 
                <Route path="/contact-us" component={Contact} />                   
        </Switch>
    )    
    }
}

export default Routers; 
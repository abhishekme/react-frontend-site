import React from 'react';
import Navbar  from './Navbar';

class Header extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <Navbar/>
        )    
    }
}

export default Header;
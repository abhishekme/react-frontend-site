import React from 'react';
import { Link} from 'react-router-dom'

class Navbar extends React.Component{

    render(){
    return(
        <div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about-us">About</Link></li>
                <li><Link to="/contact-us">Contact</Link></li>
            </ul>
        </div>
    )    
    }
}

export default Navbar;
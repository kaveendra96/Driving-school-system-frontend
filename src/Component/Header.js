import React from 'react';
import {Link} from 'react-router-dom';

//component for header
import Login from './Login/Login';
//boostrap import
import 'bootstrap/dist/css/bootstrap.css';
const Header=()=>{
    return(
        <div>
            <nav className="navbar navbar-dark bg-dark">
                <Link to='/' className="navbar-brand">Sourthen Learnes</Link>
                <Login className="nav-item"/>
            </nav>
        
        </div>
    )
}
export default Header;
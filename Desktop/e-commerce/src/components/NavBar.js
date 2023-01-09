import React from "react";
import Demo from './Demo';
import App from '../App';
import Link from 'react-router-dom';


const NavBar = () => {
return(
 <>
 <nav>
 <Link to="/">Home</Link>
 <Link to="/demo">demo</Link>
</nav>
 </>
)
}

export default NavBar
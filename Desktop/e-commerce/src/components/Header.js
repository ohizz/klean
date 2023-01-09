import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import App from '../App';

const Header = () => {
const [navigationBar, setNavigationBar] = useState(false);
 return(
<div className='head'>
<span className="hamburger" onClick={() => {setNavigationBar(!navigationBar)} }>ಠ_ಠ</span>
 <h1>kicks</h1>
  <input type='text' placeholder='search'/>
  
   <nav>
    <ul className={navigationBar ? "navexpanded" : "navclose"}>
     <Link to="/demo"> 
     <svg className='cart' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-shopping-cart"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
     </svg>
     </Link>
     {/* <Link to="/">Home</Link> */}
    </ul>
   </nav>
  </div>
 )
}

export default Header
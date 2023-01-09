import react from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
 return(
  <div className='footer'>
  <nav className='menu'>
 <Link to="/">Home</Link>
 <Link to="/demo">product</Link>
 <Link to="/">faq</Link>
 <Link to="/demo">lookbook</Link>
</nav> 
  <a className='link' href='#'>© kick</a>
  </div>
 )
}

export default Footer
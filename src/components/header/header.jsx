import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo} from '../../assests/crown.svg'
import './header.scss'

function Header(props) {
  return (
    <div className='header'>
      <Link className='logo-container' to='/'> 
        <Logo className='logo'/>
      </Link>
      <div className='pages'>
        <Link className='page' to='/shop'>SHOP</Link>  
        <Link className='page' to='/contact'>CONTACT</Link>  

      </div>
      
    </div>
  );
}

export default Header;
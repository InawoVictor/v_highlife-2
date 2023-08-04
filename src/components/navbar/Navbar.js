import { Link } from 'react-router-dom';
import Logo from '../../img/logo.png';
import Cart from '../../img/shopping-cart.png'
import User from '../../img/user.png'
import './Navbar.css'
import {GiHamburgerMenu} from 'react-icons/gi';
import { useState } from 'react';


const Navbar = () => {

  const [nav, setNav] = useState(false);
      
  const handleNav = () => {
    setNav(!nav)
  }


  return (
    <nav className='nav-wrapper'>
      <div>
        <Link to='/'>
          <img src={Logo} alt='Logo'  className='logo'/>
        </Link>
      </div>

      <ul className='nav'>
        <li className='nav-link'>
          <Link to='/' className='link main'>life blood</Link>
        </li>
        <li className='nav-link'>
          <Link to='/categories' className='link'>carlton williams</Link>
        </li>
        <li className='nav-link'>
          <Link to='/store' className='link'>store</Link>
        </li>
        <li className='nav-link'>
          <Link to='/highlife-tv' className='link'>highlife tv</Link>
        </li>
        <li className='nav-link'>
          <Link to='/categories' className='link'>Naira</Link>
        </li>
      </ul>
      <div className='nav-items'>
        <img src={Cart} alt='shopping cart' className='nav-img' />
        <img src={User} alt='User' className='nav-img'/>
        <button className='btn-primary'>sign up/ login</button>
        
      </div>
      <div className= {nav ? 'mobile active' : 'mobile'}  >
        <ul className='mobile-nav' >
          <li className='nav-link'>
            <Link to='/' className='link main'>life blood</Link>
          </li>
          <li className='nav-link'>
            <Link to='/categories' className='link'>carlton williams</Link>
          </li>
          <li className='nav-link'>
            <Link to='/store' className='link'>store</Link>
          </li>
          <li className='nav-link'>
            <Link to='/highlife-tv' className='link'>highlife tv</Link>
          </li>
          <li className='nav-link'>
            <Link to='/categories' className='link'>Naira</Link>
          </li>
        </ul>
        <div className='mobile-items'>
          <img src={Cart} alt='shopping cart' className='nav-img' />
          <img src={User} alt='User' className='nav-img'/>
          <button className='btn-primary'>sign up/ login</button>
        </div>
      </div>

      <div className='hamburger ' onClick={handleNav}>
        <h1 className='hamburger-text'>Menu</h1> 
      <GiHamburgerMenu className='nav-icon'/>
      </div>

     
      
      
    </nav>
  )
}

export default Navbar

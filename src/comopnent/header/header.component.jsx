import React from 'react';

import {Link} from 'react-router-dom'
//logo
import logo from '../../assets/logo.png'
import './styles/header.styles.scss'
import {ReactComponent as Arrow} from '../../assets/toparrow.svg'

import CartIcon from '../cart/Icon/cart-icon'
import CartDropdown from '../cart/dropdown/cart-dropdown';



const Header = () => {
    return ( 
       <div className="header">
           <div className="options">
               <Link className="option" to='/women'>Women</Link>
               <Link className="option" to='/men'>Men</Link>
               <Link className="option" to='/kids'>Kids</Link>
           </div>
           <Link to="/" className="logo-container">
                <img src={logo} alt="logo" className="logo"/>
           </Link>
           <div className="cart-currency">
               <div className="currency">
                   <span className="amount">$</span>
                   <Arrow className="arrow" />
               </div>
                <CartIcon />
           </div>
           <CartDropdown />
       </div>
     );
}
 
export default Header;
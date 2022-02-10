import React from 'react';
import {connect} from 'react-redux';

import {NavLink,Link } from 'react-router-dom'
//logo
import logo from '../../assets/logo.png'
import './styles/header.styles.scss'
import {ReactComponent as Arrow} from '../../assets/toparrow.svg'

import CartIcon from '../cart/Icon/cart-icon'
import CartDropdown from '../cart/dropdown/cart-dropdown';



const Header = ({hidden}) => {
    return ( 
       <div className="header">
           <div className="options">
               <NavLink activeClassName="navbar__link--active" className="option" to='/women'>WOMEN</NavLink>
               <NavLink activeClassName="navbar__link--active" className="option" to='/men'>MEN</NavLink>
               <NavLink activeClassName="navbar__link--active" className="option" to='/kids'>KIDS</NavLink>
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
          {
              hidden ? null :  <CartDropdown />
          }
       </div>
     );
}
 
const mapStateToProps = ({cart: { hidden }}) => ({
    hidden
})

export default connect(mapStateToProps)(Header);
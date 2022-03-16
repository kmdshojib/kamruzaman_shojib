import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'

import './header.styles.scss'

import CartDropDown from './cart-dropdown/cart-dropdow.component'

import Currency from '../currency-selctor/currency.component'
import logo from '../../assets/logo.png'

class Header extends Component {
    state = {
        currencyClick: false,
        cartClick: false,
    }

    handleCurrency = (state) => {
        this.setState({
            currencyClick: state,
            cartClick: false
        });
    }
    handleCart = (state) => {
        this.setState({
            currencyClick: false,
            cartClick: state,
        });
    }

    render() { 
    const {category,switchCategory} =this.props
    return (
        <div className="header">
            <div className="options">
                <NavLink className="option" activeClassName={(category === 'all') ? "navbar__link--active" : ""}  to="/" onClick={()=> switchCategory('all')}>ALL</NavLink>
                <NavLink  className="option" activeClassName={(category === 'tech') ? "navbar__link--active" : ""}  to="/" onClick={()=>switchCategory('tech')}>TECH</NavLink>
                <NavLink  className="option" activeClassName={(category === 'clothes') ? "navbar__link--active" : ""} to="/"onClick={() =>switchCategory('clothes')}>CLOTHES</NavLink>
            </div>

            <NavLink   to="/shopping-cart" >
                <img className="logo" src={logo} alt="logo" />
            </NavLink>

            <div className="cart-currency">
            <div className="currency">
            <Currency 
                    currencyClick={this.state.currencyClick}
                    cartClick={this.state.cartClick}
                    handleCurrency={this.handleCurrency}
                    currencyIndex={this.props.currencyIndex}
                    getCurrencySymbol={this.props.getCurrencySymbol}
                    selectCurrency={this.props.selectCurrency}
                    overlayChange={this.props.overlayChange}
                    overlay={this.props.overlay}
                />
        </div>
            
         <div className="cart">
            <CartDropDown 
                    cartClick={this.state.cartClick}
                    currencyClick={this.state.currencyClick}
                    handleCart={this.handleCart}
                    shoppingCart={this.props.shoppingCart}
                    currencyIndex={this.props.currencyIndex}
                    getCurrencySymbol={this.props.getCurrencySymbol}
                    INCREMENT_CART={this.props.INCREMENT_CART}
                    DECREMENT_CART={this.props.DECREMENT_CART}
                    REMOVE_FROM_CART={this.props.REMOVE_FROM_CART}
                    overlayChange={this.props.overlayChange}
                    overlay={this.props.overlay}
                    returnAttributes={this.props.returnAttributes}
                />
         </div>
            </div>
        </div>
        );
    }
}
 
export default Header;
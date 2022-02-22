import React, { Component } from 'react'

import {ReactComponent as Cartbtn} from '../../assets/CartIcon.svg'
import './cart-button.styles.scss'


class CartButton extends Component {
    render() { 
        return (
            <div className="cart-btn">
                <Cartbtn className="btn-style"/>
            </div>
        );
    }
}
 
export default CartButton;
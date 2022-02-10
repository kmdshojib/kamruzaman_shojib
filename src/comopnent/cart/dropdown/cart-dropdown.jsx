import React from 'react';
import {connect} from 'react-redux';

import './cart-dropdown.styles.scss'
import CartItem from '../cart-item/cart-item.comopnent'


const CartDropdown = ({cartItems}) => {
    
    return ( 
        <div className="cart-dropdown">
            <h2>My bag {cartItems.length} Items</h2>
            <div className="cart-items">
                {
                    cartItems.map(cartItem =>(
                        <CartItem key={cartItem.id} item={cartItem}/>
                    ))
                }
            </div>
            <button>Go to checkout</button>
        </div>
     );
}

const mapStateToProps = ({cart: { cartItems } }) => ({
    cartItems
})
 
export default connect(mapStateToProps)(CartDropdown);
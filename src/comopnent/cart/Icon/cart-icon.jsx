import React from 'react';
import {ReactComponent as ShoppingIcon} from '../../../assets/vector.svg'

import {connect} from 'react-redux'

import {toggleCartHidden} from '../../../redux/cart-reducer/cart.action'

import './cartIcon.styles.scss'

const CartIcon = ({itemCount,toggleCartHidden,cartItems}) => {
    return ( 
        <div className="cart-contianer" onClick={toggleCartHidden}>
            <ShoppingIcon />
            <div className="item-count">
                <span className="number">{cartItems.length}</span>
            </div>
        </div>
     );
}
 
const mapDispatchToProps = dispatch =>({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})
const mapStateToProps = ({cart: { cartItems } }) => ({
    cartItems
})

export default connect(mapStateToProps, mapDispatchToProps) (CartIcon);
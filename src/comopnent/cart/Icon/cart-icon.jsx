import React from 'react';
import {ReactComponent as ShoppingIcon} from '../../../assets/vector.svg'

import './cartIcon.styles.scss'

const CartIcon = ({itemCount}) => {
    return ( 
        <div className="cart-contianer">
            <ShoppingIcon />
            <div className="item-count">
                <span>{itemCount}</span>
            </div>
        </div>
     );
}
 
export default CartIcon;
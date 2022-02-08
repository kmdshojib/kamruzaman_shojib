import React from 'react';

import {ReactComponent as Cartbtn} from '../../../assets/vector.svg'
import './cart-button.styles.scss'

const CartButton = () => {
    return ( 
        <div className="cart-btn">
            <Cartbtn className="btn-style"/>
        </div>
     );
}
 
export default CartButton;
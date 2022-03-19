import React, { Component } from 'react';
import './cart-dropdown.styles.scss'

import {Link} from 'react-router-dom'
import {ReactComponent as CartIcon} from '../../../assets/CartIcon.svg'
import CartItem from '../cart-item/cart-item.component.';

import './cart-dropdown.styles.scss'

class CartDropDown extends Component {

    state = {
        currencyClick: false,
        cartClick: false,
    }

    cartTotal = (cart, currencyIndex) => {
        let total = 0;
        let currencySymbol = "$";

        if (cart) {
            cart.forEach((item) => {
                currencySymbol = this.props.getCurrencySymbol(item.prices[currencyIndex].currency.label)
                let singlePrice = item.prices[currencyIndex].amount * item.qty;
                total += singlePrice;
            })
        }

        return currencySymbol + total.toFixed(2)
    }

    itemsInCart = (cart) => {
        let total = 0;
        if (cart) {
            cart.forEach(item => {
                total += item.qty;
            });
        }

        return total;
    }

    cartRef = React.createRef()
    handleCurrencyOutside = (event) => {
        if (this.props.cartClick){
            if(!this.cartRef.current.contains(event.target) ){
                this.props.handleCart(false) }
        } 
    }
    componentDidMount() {
        document.addEventListener("mousedown", this.handleCurrencyOutside)
    }
    componentWillUnmount(){
        document.removeEventListener("mousedown", this.handleCurrencyOutside)
    }

    render() {
        const{handleCart,
            overlayChange,
            shoppingCart,
            getCurrencySymbol,
            currencyIndex, 
            INCREMENT_CART,
            DECREMENT_CART,
            REMOVE_FROM_CART,
            overlay,returnAttributes,cartClick} =this.props
        return (
            <div ref={this.cartRef}>
                <div 
                    className="shoppingCart " 
                    onClick={() =>  {
                        handleCart(!cartClick)
                        overlayChange(!this.props.overlay)
                        }
                    }
                >
                    <CartIcon />
                    <div className="cartCounter">
                        <span className="circle">
                            {this.itemsInCart(shoppingCart)}
                        </span>
                    </div>
                </div>
                
                <div className = {cartClick  ? "cart-dropdown hidden": "cart-dropdown"}>
                    <h2>My Bag {this.itemsInCart(shoppingCart)} Items</h2>
                    <div className="dropdown-items">
                        {shoppingCart.slice(0, 2).map((product, index) => (
                            <CartItem
                            getCurrencySymbol={getCurrencySymbol}
                            currencyIndex={currencyIndex}
                            shoppingCart={shoppingCart}
                            INCREMENT_CART={INCREMENT_CART}
                            DECREMENT_CART={DECREMENT_CART}
                            REMOVE_FROM_CART={REMOVE_FROM_CART}
                            handleCart={handleCart}
                            product={product}
                            key={index}
                            overlayChange={overlayChange}
                            overlay={overlay}
                            returnAttributes={returnAttributes}
                            />
                        ))}
                    </div>
                    <div className="cartTotal">
                        <h5>Total amount</h5>
                        <h5>
                            {this.cartTotal(shoppingCart,currencyIndex)}
                        </h5>
                    </div>

                    <div className="cartButtons">
                        <Link 
                            to="/shopping-cart"
                            onClick={() =>  {
                                handleCart(!this.props.cartClick)
                                overlayChange(!this.props.overlay)
                                }
                            }
                        >
                            <button>VIEW BAG</button>
                        </Link>
                        
                        <Link 
                            to="/checkout"
                            onClick={() =>  {
                                handleCart(!cartClick)
                                overlayChange(!this.props.overlay)
                                }
                            }
                        >
                            <button className="green">CHECKOUT</button>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}
 
export default CartDropDown;
import React, { Component } from 'react'
import SlideImage from './slide-image/slide-image';
import './cart-page.styles.scss'

export default class ShoppingCart extends Component {
 
    render() {
        return (
            <div className="cartPage">
                <span className="cart-header">CART</span>
               

                {    
                    this.props.shoppingCart.length > 0
                   
                    ?
                    this.props.shoppingCart.map((item) => (
                        <div className="itemsInCart">
                            <div>
                                <div className="cartPageText">
                                    <span className="barnd">{item.brand}</span>
                                    <h5 className="name">{item.name}</h5>
                                </div>

                                <div className="cartItemPrice">
                                    <h5>
                                        {console.log(item.prices[this.props.currencyIndex].currency)}
                                        {this.props.getCurrencySymbol(item.prices[this.props.currencyIndex].currency.label)} 
                                        {item.prices[this.props.currencyIndex].amount}
                                    </h5>
                                </div>
                                
                                <div className="attributesBlock productTextBlock">
                                    {
                                        item.attributes.map((attributes, index) => {
                                            return (
                                                <div key={index}>
                                                    <h5 className="robotoText">{attributes.name.toUpperCase()}:</h5>
                                                    <div className="attributesBlockSquares">
                                                        {
                                                            this.props.returnAttributes(item.id, attributes.items, attributes.name)
                                                        }
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>

                            <div>
                                <div className="quantityImage">
                                    <div className="quantityButtons">
                                        <button className="btn" onClick={() => this.props.INCREMENT_CART(item)}>+</button>
                                        <h6>{item.qty}</h6>
                                        <button className="btn" onClick={() => this.props.DECREMENT_CART(item)}>-</button>
                                    </div>

                                    <div className="sliderAndButton">
                                        <SlideImage images={item.gallery}/>
                                        <button className="remove"
                                            onClick={() => this.props.REMOVE_FROM_CART(item)}
                                        >Remove From Cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                    :
                    <h1>No Cart Items</h1>
                }
            </div>
        )
    }
}
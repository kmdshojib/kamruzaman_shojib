import React, { Component } from 'react';

import './products.Styles.scss'
import CartButton from '../cart-button/cart-btn';
import {Link} from 'react-router-dom'

class ProductCard extends Component {
    state = {  } 
    render() { 
        const imgUrl = this.props.product.gallery[0]
        const {name,inStock,prices,brand,id} = this.props.product
        const {currencyIndex,getCurrencySymbol,ADD_TO_CART,product,overlay} = this.props

        return (
            <div>
                <div className={inStock? "product-collection": "outOfStock product-collection"}>
                    <div>
                    <Link to={ `/product/${id}`}><img className="image" src={imgUrl} alt={name} /> </Link>
                            {overlay? (
                                <div className="collection-footer">
                                    {inStock? (""): (<div className="stockText">OUT OF STOCK</div>)}
                                        <div className="name">{brand} {name}</div>
                                        <div className="price">
                                            {getCurrencySymbol(prices[currencyIndex].currency.label)} 
                                            {prices[currencyIndex].amount}
                                        </div>
                                </div>
                                ):(
                            <div className="price-cart">
                                <Link to={ `/product/${id}`}>
                                    <div className="collection-footer">
                                    {inStock? (""): (<div className="stockText">OUT OF STOCK</div>)}
                                        <div className="name">{brand} {name}</div>
                                        <div className="price">
                                            {getCurrencySymbol(prices[currencyIndex].currency.label)} 
                                            {prices[currencyIndex].amount} 
                                        </div>
                                    </div>
                                </Link>
                                <div className="add-button">
                                {
                                inStock
                                ? (
                                    <span onClick={overlay? (null): (() =>ADD_TO_CART(product))}>
                                    <CartButton />
                                    </span>): ("")} 
                                </div>
                            </div>
                            )}
                    </div>
                </div>
            </div>     
        );
    }
}
 
export default ProductCard;
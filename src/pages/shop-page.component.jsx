import React, { Component } from 'react';

import {Query} from '@apollo/react-components'

// Get GRAPHQL Query From The End POint
import {GET_CLOTHES, GET_GADGETS, GET_ALL_PRODUCTS} from '../gql/graphql.query'

//Get the Product Card 

import ProductCard from '../components/Product/products.component'

import Spinner from '../spinner/spinner.comopnent'

import './shop.styles.scss'

class ShopPage extends Component {
    state = {  } 
    render() { 
        const {currencyIndex,getCurrencySymbol,category} = this.props
        return (
            <Query query={
                (category === 'all') ? GET_ALL_PRODUCTS
                    :(category === 'tech') ? GET_GADGETS
                    : (category === 'clothes') ? GET_CLOTHES
                    : (null)
            }>
             {
                    ({loading, error, data}) => {
                        if (loading) return <Spinner/>;
                        if (error) return <p>Error :(</p>;
                        
                        return (
                            <div className="shop-preview">

                                <h1 className="headingDesktop">
                                    {category[0].toUpperCase() + category.slice(1)}
                                </h1>

                                <div className="view">
                                    {
                                        data.category.products.map((product,index) => (
                                            <ProductCard
                                                key={index}
                                                getCurrencySymbol={getCurrencySymbol}
                                                product={product}
                                                currencyIndex={currencyIndex}
                                                ADD_TO_CART={this.props.ADD_TO_CART}
                                                REMOVE_FROM_CART={this.props.REMOVE_FROM_CART}
                                                INCREMENT_CART={this.props.INCREMENT_CART}
                                                DECREMENT_CART={this.props.DECREMENT_CART}
                                            />
                                        ))
                                    }
                                </div>
                            </div>
                        )
                    }
                }
            </Query>
        );
    }
}
 
export default ShopPage;
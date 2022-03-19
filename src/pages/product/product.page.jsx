import React, { Component } from 'react';
import { Query } from '@apollo/react-components';
import { GET_EACH_PRODUCT } from '../../gql/graphql.query';

import './product-page.styles.scss'
import Spinner from '../../spinner/spinner.comopnent'

//this liberary will parse html to react
import parser from 'html-react-parser';

export default class ProductPage extends Component {
    
      state = {
            imageIndex: 0
        }

    switchImage = (index) => {
        this.setState({
            imageIndex: index
        })
    }

    render() {
        const { id } = this.props.match.params;
        const {currencyIndex,getCurrencySymbol,returnAttributes,ADD_TO_CART} =this.props
        const {imageIndex} = this.state
        return (
            <Query query={ GET_EACH_PRODUCT } variables={ { id } }>
                {/*Here we will pass the data into the components as props if we have large jsx*/}
                {({loading, error, data}) => {
                if (loading) return <Spinner/>;
                if (error) return <p>Error :(</p>;
                
                return (
                    <div className="productPageContainer" key={data.product.id}>
                        <div className="wrapperProduct">
                            <div className="imagesWrapper">
                                <div className="smallImagesWrapper">
                                    {
                                        data.product.gallery.map((image, index) => (
                                            <div 
                                            onClick={() => this.switchImage(index)}
                                            key={index}
                                            className="smallImages"
                                            >
                                                <img 
                                                    src={image} 
                                                    alt={data.product.name} 
                                                />
                                            </div>
                                        ))
                                    }
                                </div>

                                <div className="bigImage">
                                    <img
                                        src={data.product.gallery[imageIndex]} 
                                        alt={data.product.name}
                                    />
                                </div>
                            </div>

                            <div>
                                <div>
                                    <div className="productText">
                                        <div className="productTextBlock">
                                            <h4>{data.product.brand}</h4>
                                            <h4>{data.product.name}</h4>
                                        </div>
                                        <div className="attributesBlock productTextBlock">
                                        {
                                            data.product.attributes.map((attributes, index) => {
                                                return (
                                                    <div key={index}>
                                                        <h5 className="robotoText">{attributes.name.toUpperCase()}:</h5>
                                                        <div className="attributesBlockSquares">
                                                            {
                                                                returnAttributes(data.product.id, attributes.items, attributes.name)
                                                            }
                                                        </div>
                                                    </div>
                                                )
                                            })
                                        }
                                        </div>

                                        <div className="productTextBlock">
                                            <h5 className="robotoText">PRICE:</h5>
                                            <h5>
                                                {getCurrencySymbol(data.product.prices[currencyIndex].currency.label)} 
                                                {data.product.prices[currencyIndex].amount}
                                            </h5>
                                        </div>
                                        
                                        <div className="productTextBlock">
                                            {
                                                data.product.inStock
                                                ? (
                                                <button
                                                    className="addToCart"
                                                    onClick={() => ADD_TO_CART(data.product)}
                                                >ADD TO CART</button>
                                                )
                                                : (
                                                <button
                                                    className="addToCartDim"
                                                >ADD TO CART</button>
                                                )
                                            }
                                        </div>

                                        <div className="productDescription productTextBlock">
                                            {
                                                parser(data.product.description)
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
                }}
            </Query>
        )
    }
};

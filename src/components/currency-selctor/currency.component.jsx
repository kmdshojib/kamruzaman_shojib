import React, { Component } from 'react';

import {Query} from '@apollo/react-components'

import {GET_CURRENCY} from '../../gql/graphql.query'

import {ReactComponent as Arrow} from '../../assets/toparrow.svg'
import './currency.styles.scss'
import Spinner from '../../spinner/spinner.comopnent';

class Currency extends Component {
    render() { 
        return (
            <Query query={ GET_CURRENCY }>
            {
                ({loading, error, data}) => {
                    console.log(data)
                    if (loading) return <Spinner/>;
                    if (error) return <p>Err</p>;

                    return (
                        <div>
                            <div 
                                className="currencySelector" 
                                onClick={() => { 
                                    this.props.handleCurrency(!this.props.currencyClick)
                                    this.props.overlayChange(false)
                                    }
                                }
                            > 
                                <div>$</div>
                                <Arrow className="arrow" />
                            </div>

                            {/* geeting symbol the end point using same function */}
                            <div  className={this.props.currencyClick ?"currency-dropdown show" : "currency-dropdown"} >
                                {
                                    data.currencies.map(({label,symbol}) => (
                                     
                                        <span class="symbol"
                                        onClick={() => {
                                         
                                            this.props.handleCurrency(false)
                                            this.props.selectCurrency(label)
                                        }}
                                        >{this.props.getCurrencySymbol(symbol)} {symbol}<span class="label">{label}</span></span>
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
 
export default Currency;
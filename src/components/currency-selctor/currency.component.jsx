import React, { Component } from 'react';

import {Query} from '@apollo/react-components'

import {GET_CURRENCY,} from '../../gql/graphql.query'

import {ReactComponent as Arrow} from '../../assets/toparrow.svg'
import './currency.styles.scss'
import Spinner from '../../spinner/spinner.comopnent';

class Currency extends Component {
  

    currencyRef = React.createRef()

    handleCurrencyOutside = (event) => {
        if (this.props.currencyClick){
            if(!this.currencyRef.current.contains(event.target) ){
                 this.props.handleCurrency(false) }
        } 
        
    }
    
    componentDidMount() {
        document.addEventListener("mousedown",this.handleCurrencyOutside)
    }

    render() { 
        const {currencyIndex,handleCurrency,overlayChange,currencyClick,selectCurrency,getCurrencySymbol} = this.props
        return (
            <Query query={ GET_CURRENCY }>
            {
                ({loading, error, data}) => {
                    if (loading) return <Spinner/>;
                    if (error) return <p>Err</p>;

                    return (
                        <div ref={this.currencyRef}>
                            <div  
                                className="currencySelector" 
                                onClick={() => { 
                                    handleCurrency(!currencyClick)
                                    overlayChange(false)
                                    }
                                }
                            > 
                                 <span className="symbol">{data.currencies[currencyIndex].symbol}</span> 
                                <Arrow className="arrow" />
                            </div>

                            {/* geeting symbol the end point using same function */}
                            <div  className={currencyClick ?"currency-dropdown show" : "currency-dropdown"} >
                                {
                                    data.currencies.map(({label,symbol}) => (
                                     
                                        <span className="symbol" key={label}
                                        onClick={() => {
                                            handleCurrency(false)
                                            selectCurrency(label)
                                        }}
                                        >{getCurrencySymbol(symbol)} {symbol}<span className="label">{label}</span>
                                        </span>
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
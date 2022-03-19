import React, { Component } from 'react';
import  {GET_ALL_PRODUCTS} from '../../gql/graphql.query'
import {Query} from '@apollo/react-components'

class Symbol extends Component {
    state = {  } 
    render() { 
        return (
            <Query query={ GET_ALL_PRODUCTS }>
            {
                ({loading, error, data}) => {
                    console.log(data)
                    if (loading) return <p>rrr</p>;
                    if (error) return <p>Err</p>;

                    return (
                       <div>
                           {
                               data.product.price.currency.map(({label})=>(
                                   <div>{label}</div>
                               ))
                           }
                       </div>
                    )
                }
            }
        </Query>
        );
    }
}
 
export default Symbol;
import React, { Component } from 'react'


import SHOP_DATA from '../../shop.data'
import './currency-dropdown.styles.scss'



class CurrencyDropdown extends Component {
    state = { 
        collections: SHOP_DATA,
     } 
     
     handleClick = () => {
      const { collections } = this.state
      collections.map(({items})=>(
        items.map( ({price}) =>(
          this.setState({ price : price +1 })
        ))
      ))
      console.log(this.state)
  }
 
    
    render() { 
      const {collections} = this.state
        return (
        <div className="currency-container">
            <span className="dollar">USD</span>
            <button className="euro" onClick={ this.handleClick}>Euro</button>
            <span className="yen" >Yen</span>
           
        </div>
        );
    }
}
 


export default CurrencyDropdown;
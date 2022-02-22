import React from 'react';
import './styles/collection-items.styles.scss'
import {connect} from 'react-redux';

import {addItem} from '../../redux/cart-reducer/cart.action'

import CartButton from '../../comopnent/cart/carrt-button/cartbutton'

const CollectionItem = ({item, addItem}) =>{
  const { name, imageUrl,price} = item
  
  return (
    <div className='collection-item'>
      <div
        className='image'
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      />

      <div className="add-button" onClick={() => addItem(item)}>
        <CartButton />
      </div>
      <div className='collection-footer'>
        <span className='name'>{name}</span>
        <span className='price'>${price}</span>
      </div>
    </div>
  )
};
  
const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
})

  export default connect(null,mapDispatchToProps) (CollectionItem);
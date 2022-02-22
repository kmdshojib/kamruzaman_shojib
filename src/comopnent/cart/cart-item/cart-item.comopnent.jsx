import React from 'react';



import './styles/cart-item.styles.scss';

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
  <div className='cart-item'> 
    <div className='item-details'>
      <span className='name'>{name}</span>
      <span className='price'>
        {quantity} x ${price}
      </span>
    </div>
    <img src={imageUrl} alt='item' />
  </div>
);



export default CartItem;
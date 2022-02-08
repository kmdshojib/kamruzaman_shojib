import React from 'react';
import './styles/collection-items.styles.scss'

import CartButton from '../../comopnent/cart/carrt-button/cartbutton'

const CollectionItem = ({ id, name, price, imageUrl }) => (
    <div className='collection-item'>
      <div
        className='image'
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      />

      <div className="add-button">
        <CartButton/>
      </div>
      <div className='collection-footer'>
        <span className='name'>{name}</span>
        <span className='price'>${price}</span>
      </div>
    </div>
  );
  
  export default CollectionItem;
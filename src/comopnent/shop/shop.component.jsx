import React, { Component } from 'react';
import SHOP_DATA from '../../shop.data'

import PreviewCollections from '../../containers/previewcollections/previewcollections'

class ShopPage extends Component {
    state = { 
        collections: SHOP_DATA
     } 
     render() {
        const { collections } = this.state;
      
        return (
          <div className='shop-page'>
            {collections.map(({ id, ...otherCollectionProps }) => (
              <PreviewCollections key={id} {...otherCollectionProps} />
            ))}
          </div>
        );
      }
    }
 
export default ShopPage;
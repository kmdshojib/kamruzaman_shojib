import React, { Component } from 'react';
import SHOP_DATA from '../../shop.data'
import PreviewCatagory from './preview.container'
import PropTypes from "prop-types";
import {withRouter} from 'react-router-dom'

 


class WomensCatagory extends Component {
    state = { 
        collections: SHOP_DATA
     }

     static propTypes = {
      match: PropTypes.object.isRequired,
      location: PropTypes.object.isRequired,
      history: PropTypes.object.isRequired
    };
    render() { 
        
        const {collections} = this.state;
        const {  location } = this.props;
        return (
            <div className='shop-page'>
            {collections.filter(item => item.routeName === location.pathname)
            .map(({ id, ...otherCollectionProps }) => (
              <PreviewCatagory key={id} {...otherCollectionProps} />
            ))}
          
          </div>
        );
    }
}


 
export default withRouter(WomensCatagory);
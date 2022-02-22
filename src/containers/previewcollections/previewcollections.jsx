import React , { Component} from 'react';

import './styles/previewcollections.styles.scss'
//collection of items 

import CollectionItem from '../collection-item/collection-item'


class PreviewCollections  extends Component {
  
  render() { 
    const {title,items} = this.props
    return (
    <div className='collection-preview'>
      <h1 className='title'>{title}</h1>
      <div className='preview'>
        {items
          .filter((item, idx) => idx < 3)
          .map(item => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </div>
  </div>);
  }
}
 
export default PreviewCollections ;


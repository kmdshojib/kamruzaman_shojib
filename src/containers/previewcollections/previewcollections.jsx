import React from 'react';

import './styles/previewcollections.styles.scss'
//collection of items 

import CollectionItem from '../collection-item/collection-item'

const PreviewCollections = ({title,items}) => {
    return (
        <div className='collection-preview'>
    <h1 className='title'>{title}</h1>
    <div className='preview'>
      {items
        .filter((item, idx) => idx < 3)
        .map(({ id, ...otherItemProps }) => (
          <CollectionItem key={id} {...otherItemProps} />
        ))}
    </div>
  </div>
    );
}
 
export default PreviewCollections;
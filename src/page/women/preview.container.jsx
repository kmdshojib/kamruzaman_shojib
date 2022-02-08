import React from 'react';
import CollectionItem from '../../containers/collection-item/collection-item';
import './preview.catagory.scss'

const PreviewCatagory = ({title, items}) => {
    return ( 
        <div className='collection-preview'>
    <h1 className='title'>{title}</h1>
    <div className='view'>
      {items
        .map(({ id, ...otherItemProps }) => (
          <CollectionItem className="spacing" key={id} {...otherItemProps} />
        ))}
    </div>
  </div>
     );
}
 
export default PreviewCatagory;
import React from 'react';
import CollectionItem from '../../containers/collection-item/collection-item';
import './preview.catagory.scss'

const PreviewCatagory = ({title, items}) => {
    return ( 
        <div className='collection-preview'>
      <h1 className='title'>{title}</h1>
    <div className='view'>
      {items
        .map(item  => (
          <CollectionItem className="spacing" key={item.id} item={item}  />
        ))}
    </div>
  </div>
     );
}
 
export default PreviewCatagory;
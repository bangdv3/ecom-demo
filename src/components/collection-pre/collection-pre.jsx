import React from 'react';
import './collection-pre.scss'
import CollectionItem from '../collection-item/collection-item';

const CollectionPreview = ({title, items}) =>{
  return (
    <div className="collection-preview">
      <h1 className='title'>{title}</h1>
      <div className="preview">
        {
          items.filter((item, idx)=> idx < 4).map(({id, ...orthers})=> {
            return(
              <CollectionItem key={id}  {...orthers} />
            )
          })
        }
      </div>
      
    </div>
  );
}

export default CollectionPreview ;
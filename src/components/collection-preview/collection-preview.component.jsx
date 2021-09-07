import React from 'react';
import './collection-preview.styles.scss';
import CollectionItem from '../collection-item/collection-item.component';

const CollectionPreview = ({ title, items, routeName }) => (
  <div className="collection-preview">
    <div className="title">
      <a href={`/shop/${routeName}`}>
        <h1>
          {title.toUpperCase()}
        </h1>
      </a>

      <a href={`/shop/${routeName}`}>see more</a>
    </div>
    <div className="preview">
      {items
        .filter((item, index) => index < 4)
        .map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </div>
  </div>
);


export default CollectionPreview
import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import './collections-overview.style.scss';
import CollectionPreview from '../collection-preview/collection-preview.component';
import { selectcollectionsForPreview } from '../../redux/shop/shop.selectors';

const CollectionsOverview = ({ collections }) => (
  <div className='collectinons-overview'>
    {
      collections.map(({id, ...otherCollectionProps}) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))
    }
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: selectcollectionsForPreview
})

export default connect(mapStateToProps)(CollectionsOverview);
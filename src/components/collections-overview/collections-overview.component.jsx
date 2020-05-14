import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CollectionPreview from '../collection-overview/collection-overview.component';

import { selectCollectionsForPriview } from '../../redux/shop/shop.reselector';

import './collections-overview.styles.scss';

const CollectionsOverview = ({ collections }) => {
  console.log(collections)
  return (
  <div className='collections-overview'>
    {
      collections.map(item => {
        console.log(item)
        return (<CollectionPreview key={item.id} item={item} />)
      }
      )
    }
  </div>
  )
  };

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPriview
});

export default connect(mapStateToProps)(CollectionsOverview);
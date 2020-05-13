import React from 'react'
import CollectionsOverview from '../collections-overview/collections-overview.component'
import { Route } from 'react-router-dom'
import Collection from '../../pages/collection/collection.component'
const ShopPage = ({ match }) => {
    return (
        <div className="collections">
            <Route exact path={`${match.path}`} component={CollectionsOverview} />
            <Route path={`${match.path}/:collectionId`} component={Collection} />
        </div>
    )
}

export default ShopPage
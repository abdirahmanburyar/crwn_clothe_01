import React from 'react'
import CollectionsOverview from '../collections-overview/collections-overview.component'
import { Route } from 'react-router-dom'
import CategoryItem from '../../pages/category/category.component'
const ShopPage = ({ match }) => {
    return (
        <div className="collections">
            <Route exact path={`${match.path}`} component={CollectionsOverview} />
            <Route path={`${match.path}/:categoryId`} component={CategoryItem} />
        </div>
    )
}

export default ShopPage
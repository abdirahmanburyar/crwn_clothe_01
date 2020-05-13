import React from 'react'
import PreviewColelction from '../collection-preview/collection-preview.component'
import { createStructuredSelector } from 'reselect'
import { getShopCollection } from '../../redux/shop/shop.reselector'
import { connect } from 'react-redux'
const CollectionsOverview = ({ collections }) => {
        return (
            <div className="collections-overview">
                {
                    collections.map(({id, ...otherPropsCollection}) => (
                        <PreviewColelction key={id} {...otherPropsCollection} />
                    ))
                }
            </div>
        )
}

const mapStateToProps = createStructuredSelector({
    collections: getShopCollection
})

export default connect(mapStateToProps)(CollectionsOverview)
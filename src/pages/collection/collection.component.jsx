import React from 'react'
import { selectCollection } from '../../redux/shop/shop.reselector'
import { connect } from 'react-redux'
import CartItems from '../../components/collection-item/collection-item.component'
import './collection.styles.scss'
const CategoryItem = ({  collection }) => {
    const { title, items } = collection
    return (
        <div className="collection-page">
            <h1 className="ttile">{title}</h1>
            <div className="items">
                {
                  items.map(item => <CartItems key={item.id} item={item} />)
                }
            </div>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => {
    return {
        collection: selectCollection(ownProps.match.params.collectionId)(state)
    }
}

export default connect(mapStateToProps)(CategoryItem)
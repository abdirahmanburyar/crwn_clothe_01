import React, { Component } from 'react'
import CollectionsOverview from '../collections-overview/collections-overview.component'
import { Route } from 'react-router-dom'
import Collection from '../../pages/collection/collection.component'
import { firestore, convertSnapToMap } from '../../firebase/firebase.utils'
import { connect } from 'react-redux'
import { mapCollections } from '../../redux/shop/shop.actions'


import WithSpinner from '../with-spinner/with-spinner.component'
const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview)
const CollectionWithSpinner = WithSpinner(Collection)

class ShopPage extends Component {
    state = {
        loading: true
    }
    unsubscribeFromCollections = null
    async componentDidMount(){
        const { mapCollections } = this.props
        const collectionRef = await firestore.collection('collections')
       this.unsubscribeFromCollections = await collectionRef.onSnapshot(async snapshot => {
           const collection = await convertSnapToMap(snapshot)
           mapCollections(collection)
           this.setState({ loading: false })
       })
    }
    componentWillUnmount(){
        this.unsubscribeFromCollections()
    }
    render(){
        const { match } = this.props
        const { loading } = this.state
        return (
            <div className="collections">
                <Route exact path={`${match.path}`} render={(props) => <CollectionsOverviewWithSpinner isLoading={loading} {...props} />} />
                <Route path={`${match.path}/:collectionId`} render={(props) => <CollectionWithSpinner isLoading={loading} {...props} />}/>
            </div>
        )
    }
}

const dispatchStateToProps = dispatch => ({
    mapCollections: collections => dispatch(mapCollections(collections))
})

export default connect(null, dispatchStateToProps)(ShopPage)
import React, { Component } from 'react'
import PreviewColelction from '../collection-preview/collection-preview.component'
import SHOP_DATA from './shop.data'

class ShopPage extends Component {
    constructor(props){
        super(props)
        this.state = {
            collections: SHOP_DATA
        }
    }
    render() {
        const {collections} = this.state
        return (
            <div className="collections">
                {
                    collections.map(({id, ...otherPropsCollection}) => (
                        <PreviewColelction key={id} {...otherPropsCollection} />
                    ))
                }
            </div>
        )
    }
}
export default ShopPage
import React from 'react'
import { connect } from 'react-redux'
const ChechOut = ({ cart }) => {
    return (
        <div>
            <h1>checkout page</h1>
            {
                cart.map(item => (
                    <div key={item.id}>{item.name}</div>
                ))
            }
        </div>
    )
}

const mapStateToProps = ({ cart: { cart } }) => ({
    cart
})
export default connect(mapStateToProps)(ChechOut)
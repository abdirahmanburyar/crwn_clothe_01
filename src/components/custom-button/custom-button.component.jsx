import React from 'react'
import './custom-button.styles.scss'

const CustomButton = ({ Children, ...otherProps}) => (
    <button className={`custom-button ${otherProps.googlelebal ? 'googleLebal' : ''}`} { ...otherProps }>
        {otherProps.value}
    </button>
)

export default CustomButton
import React from 'react'
import CollectionItem from '../collection-item/collection-item.component'
import './collection-preview.styles.scss'

export default function PreviewColelction({title, items}) {
    // const rand = Math.floor(Math.random() * items.length)
    return (
        <div className="collection-preview">
            <h1 className="title">{title}</h1>
            <div className="preview">
                {
                    items.filter((item, idx, array) => {
                        // const rand = Math.floor(Math.random() * array.length)

                        return idx < 4
                    } ).map(({id, ...otherPropsitem}) => <CollectionItem key={id} {...otherPropsitem} /> )
                }
            </div>
        </div>
    )
}

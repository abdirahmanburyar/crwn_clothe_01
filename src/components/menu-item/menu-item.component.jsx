import React from 'react'
import { withRouter } from 'react-router-dom'
import './menu-item.styles.scss'
import { Link } from 'react-router-dom'
function MenuItem({title,imageUrl,size,linkUrl,history,match}) {
    return (
        <div className={`${size} menu-item`} onClick={() => history.push(`${match.url}${linkUrl}`)} >
            <div className="background-image" style={{
            backgroundImage: `url(${imageUrl})`
            }}/>
            <div className="content">
            <Link to={linkUrl}>
                <h1 className="title">{title.toUpperCase()}</h1>
                <span className="subtitle">Subtitle</span>
            </Link>
            </div>
        </div>
    )
}
export default withRouter(MenuItem)
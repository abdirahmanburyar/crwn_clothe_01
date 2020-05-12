import React from 'react'
import MenuItem from '../menu-item/menu-item.component'
import './directory.styles.scss'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { getItemSections } from '../../redux/directory/directory-reselector'
const Directory  = ({ sections }) => {
  
      return (
        <div className="directory-menu">
            {
                sections.map(({ id, ...menuItem }) => (
                    <MenuItem key={id} {...menuItem} />
                  ))
              }
        </div>
          )
}
const mapStateToProps = createStructuredSelector({
  sections: getItemSections
})

export default connect(mapStateToProps)(Directory)
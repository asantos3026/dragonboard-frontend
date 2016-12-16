import React from 'react'
import FooterButton from './FooterButton'
import FooterClock from './FooterClock'
import FooterIcon from './FooterIcon'

import '../../styles/widget/widget.css'

const Footer = ( props ) => {
  const { updateData, iconPath, group } = props
  return (
    <div className='widget-footer'>
      <FooterIcon iconPath={iconPath} group={group} />
      { updateData ? <FooterClock /> : null }
      <FooterButton />
    </div>
  )
}

export default Footer

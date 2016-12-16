import React from 'react'
import PopoverContainer from './PopoverContainer'
import '../../styles/widget/widget.css'

const FooterIcon = ({ group, iconPath }) => {
  return (
    <PopoverContainer description={group} iconPath={iconPath} />
  )
}

export default FooterIcon

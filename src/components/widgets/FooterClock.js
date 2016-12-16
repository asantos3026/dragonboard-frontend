import React from 'react'
import PopoverContainer from './PopoverContainer'
import '../../styles/widget/widget.css'

const FooterClock = () => {
  return (
    <PopoverContainer
      iconPath='images/widgets-icons/clock-icon.png'
      description='Updates every 5 minutes'
    />
  )
}

export default FooterClock

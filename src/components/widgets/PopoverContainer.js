import React from 'react'
import Popover from './Popover'
import '../../styles/widget/widget.css'

const PopoverContainer = ({ iconPath, description }) => {
  return (
    <div className='widget-popover-container'>
      <Popover description={description} />
      <img src={iconPath} />
    </div>
  )
}

export default PopoverContainer

import React from 'react'
import Header from '../../Header'
import Row from './Row'

import "../../../../styles/widget/widget.css"
import "../../../../styles/widget/csv/leaderboard.css"

const Leaderboard = (props) => {
  const { title, x, y } = props
  const positionStyle = { top: x, left: y }

  return(
    <article>
      <div className="widget widget-width-1 widget-height-1" style={ positionStyle }>
        <Header title={title}/>
        <div className="widget-body body-text">
          <Row />
          <Row />
        </div>
      </div>
    </article>
  )
}

export default Leaderboard


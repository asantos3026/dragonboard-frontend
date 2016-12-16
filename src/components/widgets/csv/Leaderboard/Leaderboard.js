import React from 'react'
import Header from '../../Header'
import Row from './Row'
import Footer from '../../Footer'

import "../../../../styles/widget/widget.css"
import "../../../../styles/widget/csv/leaderboard.css"

const Leaderboard = (props) => {
  const { title, x, y, update_data, icon_path, group } = props
  const positionStyle = { top: x, left: y }

  return(
    <article>
      <div className="widget widget-width-1 widget-height-1" style={ positionStyle }>
        <Header title={title}/>
        <div className="widget-body body-text">
          <Row />
          <Row />
        </div>
        <Footer
          updateData={update_data}
          iconPath={icon_path}
          group={group}
        />
      </div>
    </article>
  )
}

export default Leaderboard

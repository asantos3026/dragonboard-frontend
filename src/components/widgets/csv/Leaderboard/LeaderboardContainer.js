import React, { Component } from 'react'
import "../../../../styles/widget/widget.css"
import "../../../../styles/widget/csv/leaderboard.css"
import Header from '../../Header'

const dummyLeaderboard = {
  type: 'Leaderboard',
  title: 'Leaderboard',
  size: '1x2',
  x: '10px',
  y: '340px',
  csv_url: 'http://hdacentral.com/sylvan/banana-pudding-cake.csv',
  label_column: 'A',
  label_column_data: ['Carla', 'Aileen', 'Sylvan', 'Your mom', 'Donald Trump'],
  number_column: 'B - Elo',
  number_column_data: [1100, 1025, 1010, 1020, -1000000000],
  order_by: 'largest-first'
}

class LeaderboardContainer extends Component {
  render(){
    const { title, x, y } = this.props
    const positionStyle = { top: x, left: y }

  return(
    <article>
      <div className="widget widget-width-1 widget-height-1" style={ positionStyle }>
        <Header title={title}/>
        <div className="widget-body body-text">
          
        </div>
      </div>
    </article>
    )
  }
}

export default LeaderboardContainer
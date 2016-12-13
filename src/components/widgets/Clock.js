import React, { Component } from 'react'
import { connect } from 'react-redux'
import moment from 'moment'

import ACTIONS from '../../actions/clock'
import Header from './Header'

import "../../styles/widget/widget.scss"
import "../../styles/widget/clock.scss"

class Clock extends Component {
  componentWillMount() {
    this.props.clockTick()
  }

  componentDidMount() {
    window.setInterval( () => {
      this.props.clockTick()
    }, 5000 )
  }

  render() {
    const { title, x, y, data } = this.props 
    const positionStyle = { top: x, left: y }
    const { time, amPm, dayOfWeek, date } = data

    return (
      <article>
        <div className="widget widget--width-1 widget--height-1" style={ positionStyle }>
          <Header title={title}/>

          <div>
            <div className="widget__clockface">
              { time }
              <sub>{ amPm }</sub>
            </div>
            <div className="widget__date widget__text">
              <div>
                { dayOfWeek }
              </div>
              <div>
                { date }
              </div>
            </div>
          </div>
        </div>
      </article>
    )
  }
}

const mapDispatchToProps = dispatch => (
  {
    clockTick: () => dispatch( ACTIONS.clockTick( moment() ) )
  }
)

export default connect( state => state, mapDispatchToProps)(Clock)

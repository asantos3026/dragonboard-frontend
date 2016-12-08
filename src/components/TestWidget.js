import React, { Component } from 'react'
import { connect } from 'react-redux'
import '../styles/test_widget.css'

class TestWidget extends Component {
  render() {
    let className =
      this.props.cloudColor === 'green' ?
      'green-cloud' :
      'blue-cloud'

    return (
      <div className="test-widget">
        This is a test widget that has state. See, click on this cloud ->
        <span onClick={this.props.toggleCloud} className={className}>{'\u2601'}</span>
      </div>
    )
  }
}

export default connect(state => state)(TestWidget)

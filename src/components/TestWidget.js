import React, { Component } from 'react'
import '../styles/test_widget.css'

class TestWidget extends Component {
  render() {
    return (
      <div className="test-widget">
        This is a test widget that has state. See, click on this cloud ->
        <span className="green-cloud">{'\u2601'}</span>
      </div>
    )
  }
}

export default TestWidget

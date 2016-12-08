import React, { Component } from 'react'
import Dashboard from './Dashboard'
import {connect} from 'react-redux'
import {toggleCloud} from '../actions/dashboard'
import '../styles/button.css'

class App extends Component {
  toggleCloud() {
    this.props.dispatch(toggleCloud())
  }

  render() {
    return (
      <div className="home-page">
        <Dashboard toggleCloud={this.toggleCloud.bind(this)} />
      </div>
    )
  }
}

export default connect(state => state)(App)

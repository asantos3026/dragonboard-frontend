import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'

import App from './components/App'
import DashboardBody from './components/DashboardBody'

import './styles/index.css'


ReactDOM.render((
  <Router history={hashHistory}>
    <Route path='/' component={App} />
    <Route path='/dashboard' component={DashboardBody} />
  </Router>
), document.getElementById('root'))

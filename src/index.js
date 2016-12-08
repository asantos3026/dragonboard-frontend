import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import reducer from './reducers/root'
import './styles/index.css'
import { Router, Route, hashHistory } from 'react-router'

const initialState = {cloudColor: 'green'}

const store = createStore(reducer, initialState)

ReactDOM.render((
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={App}/>
    </Router>
  </Provider>
), document.getElementById('root'))

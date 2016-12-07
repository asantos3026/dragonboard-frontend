import React, { Component } from 'react'
import Dashboard from './Dashboard'
import {Provider, connect} from 'react-redux'
import {createStore} from 'redux'
import reducer from '../reducers/root'
import '../styles/button.css'

const initialState = {cloudColor: 'green'}

const store = createStore(reducer, initialState)

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="home-page">
          <Dashboard/>
        </div>
      </Provider>
    )
  }
}

export default connect(state => state)(App)

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import App from './components/App'
import Dashboard from './components/Dashboard'

import reducer from './reducer'
import './styles/index.css'

import { Router, Route, browserHistory } from 'react-router'

const initialState = {
  widgets: [
    {
      type: 'Text',
      title: 'Text',
      size: '1x1',
      x: '10px',
      y: '340px',
      message: {
        one: { text: 'Body text', type: 'Text' },
        two: { text: 'blarg', type: 'Alert' },
        three: { text: 'blarg', type: 'Info' },
        four: { text: 'blarg', type: 'Text' },
      },
    },
    {
      type: 'Image',
      title: 'Image',
      size: '1x1',
      x: '10px',
      y: '100px',
      path: 'http://www.easypano.com/images/pw/v3/banner.jpg',
      reload: 3
    },
    {
      type: 'Clock',
      title: 'Clock',
      size: '1x1',
      x: '10px',
      y: '820px',
      format: 0,
      country: 'United States',
      city: 'Los Angeles',
      data: {
        time: '', 
        meridian: '',
        dayOfWeek: '',
        date: ''
      }
    },
    {
      type: 'QRCode',
      title: 'QR Code',
      size: '1x1',
      x: '10px',
      y: '580px',
      url: 'http://www.easypano.com/images/pw/v3/banner.jpg'
    },
  ]
}

const store = createStore( 
  reducer, 
  initialState, 
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

ReactDOM.render((
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path='/' component={App} />
      <Route path='dashboard' component={Dashboard} />
    </Router>
  </Provider>
), document.getElementById('root'))

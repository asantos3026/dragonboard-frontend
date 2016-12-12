import React, { Component } from 'react'
import Dashboard from './Dashboard'
import '../styles/button.css'

class App extends Component {
  render () {
    return (
      <div className='wrapper'>
        <HomeNav />
        <HomeBody />
        <HomeFooter />
      </div>
    )
  }
}

export default App

import React, {Component} from 'react'
import {hot} from 'react-hot-loader'

class App extends Component {
  render() {
    console.log('rror')

    return (
      <div>
        <h1>Hello world.</h1>
      </div>
    )
  }
}

export default hot(module)(App)

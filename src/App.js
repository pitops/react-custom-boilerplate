import React, { Component } from 'react'
import { hot } from 'react-hot-loader'

const a = 'A'

class app extends Component {
  state = {
    count: 0
  }

  render () {
    return (
      <div>
        <h1>Hello world!!!!</h1>
      </div>
    )
  }
}

export default hot(module)(app)

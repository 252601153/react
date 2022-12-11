import React, { Component } from 'react'
import Count from './components/Count'
import ReaduxCount from './components/ReduxCount'

export default class App extends Component {
  render() {
    return (
      <div>
        <Count/>
        <ReaduxCount/>
      </div>
    )
  }
}

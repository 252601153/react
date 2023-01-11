import React, { Component } from 'react'
import ReactReaduxCount from './components/ReactReduxCount/ReactReduxCount'
import Person from './components/Person/Person'

export default class App extends Component {
  render() {
    return (
      <div>

        {/* <Count/> */}
        {/* <ReaduxCount/> */}
        <ReactReaduxCount/>
        <hr />
        <Person />

      </div>
    )
  }
}

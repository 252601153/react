import React, { Component } from 'react'
import Count from './components/Count'
import ReaduxCount from './components/ReduxCount'
import CountConainer from './containers/Count'
import store from './redux/store'

export default class App extends Component {
  render() {
    return (
      <div>
        
        <Count/>
        <ReaduxCount/>
        <CountConainer store={store}/>

      </div>
    )
  }
}

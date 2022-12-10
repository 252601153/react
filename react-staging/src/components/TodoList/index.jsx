import React, { Component } from 'react'
import Footer from './Footer'
import Header from './Header'
import ItemList from './ItemList'

export default class TodoList extends Component {
  render() {
    return (
      <div>
        <Header />
        <ItemList></ItemList>
        <Footer></Footer>
      </div>
    )
  }
}

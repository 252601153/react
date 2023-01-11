import React, {Component} from 'react'
import FileInput from './components/FileInput/FileInput';
import TodoList from './components/TodoList';

export default class App extends Component {

  render () {
    return (
      <div>
        <TodoList ></TodoList>
        <br />
        <FileInput></FileInput>
      </div>
    );
  }
  
}


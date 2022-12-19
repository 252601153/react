import { nanoid } from "nanoid";
import React, { Component } from "react";
import { connect } from "react-redux";
import { createAddPersonAction } from "../../redux/actions/person";

class Person extends Component {
  addPerson = () => {
    const name = this.nameNode.value;
    const age = this.ageNode.value;
    const person = { id: nanoid(), name, age };
    console.log(person);
    this.props.addPerson(person);
  };

  render() {
    return (
      <div>
        <h2>我是person组件</h2>
        <input
          ref={(c) => (this.nameNode = c)}
          type="text"
          placeholder="输入名字"
        />
        <input
          ref={(c) => (this.ageNode = c)}
          type="text"
          placeholder="输入年龄"
        />
        <button onClick={this.addPerson}>添加</button>
        <ul>
          {this.props.persons.map(p => {
              return <li>{p.name}---{p.age}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default connect((state) => ({ persons: state.person }), {
  addPerson: createAddPersonAction,
})(Person);

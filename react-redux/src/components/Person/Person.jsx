import {nanoid} from "nanoid";
import React, {Component, PureComponent} from "react";
import {connect} from "react-redux";
import {addPerson} from "../../redux/actions/person-action";

class Person extends PureComponent {
    addPerson = () => {
        const name = this.nameNode.value;
        const age = this.ageNode.value;
        const person = {id: nanoid(), name, age};
        console.log(person);
        this.props.addPerson(person);
    };

    render() {
        return (
            <div>
                <h2>我是person组件</h2>
                <h4>上方Count组件求和的值为{this.props.count}</h4>
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
                        return <li key={p.id}>{p.name}---{p.age}</li>;
                    })}
                </ul>
            </div>
        );
    }
}

export default connect((state) => ({persons: state.person, count: state.count}), {
    addPerson
})(Person);

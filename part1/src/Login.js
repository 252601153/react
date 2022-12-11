import React from "react";
import PubSub from "pubsub-js";

export class Login extends React.Component {
    state = {
        username: '',
        password: ''
    }

    saveUsername = (event) => {
        this.setState({ username: event.target.value })
    }

    savePassword = (event) => {
        this.setState({ password: event.target.value })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const { username, password } = this.state;
        alert(`你输入的用户名是${username},密码是${password}`);
        PubSub.publish('my-topic','Hello World!');
    }

    saveFormData = (dataType) => {
        return (event) => {
            console.log(dataType, event.target.value)
            this.setState({ [dataType]: event.target.value })
        }
    }
    saveFormData2 = (dataType, event) => {
        this.setState({ [dataType]: event.target.value })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h1>用户登录</h1>
                用户名: <input type='text' name='username' onChange={event => this.saveFormData2('username', event)}></input>
                <p></p>
                密码: <input type='password' name='password' onChange={this.saveFormData('password')}></input>
                <p></p>
                <button>登录</button>
            </form>
        )
    }
}
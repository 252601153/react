import React from "react";

export class Login extends React.Component {
    state = {
        username:'',
        password:''
    }

    saveUsername = (event) => {
        this.setState({username:event.target.value})
    }

    savePassword = (event) => {
        this.setState({password:event.target.value})
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const {username,password}=this.state;
        alert(`你输入的用户名是${username},密码是${password}`)
    }

    render() {
        console.log('触发 render()')
        return(
            <form onSubmit={this.handleSubmit}>
                <h1>用户登录</h1>
                用户名: <input type='text' name='username' onChange={this.saveUsername}></input>
                <p></p>
                密码: <input type='password' name='password' onChange={this.savePassword}></input>
                <p></p>
                <button>登录</button>
            </form>
        )
    }
}
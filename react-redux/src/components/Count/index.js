import React, { Component } from 'react'

export default class Count extends Component {

    state = { count: 0 }
    selectedValue = React.createRef()

    incement = () => {
        this.setState(
            (preState) => {
                return { count: preState.count + this.selectedValue.current.value * 1 }
            }
        )
    }
    decement = () => {
        this.setState(
            (preState) => {
                return { count: preState.count - this.selectedValue.current.value * 1 }
            }
        )
    }
    incementIfOdd = () => {
        this.setState(
            (preState) => {
                let count = preState.count;
                if (count % 2 !== 0) {
                    count = count + this.selectedValue.current.value * 1
                }
                return { count: count }
            }
        )
    }
    incementAsync = () => {
        setTimeout(
            () => {
                this.incement()
            }, 1000
        )
    }

    render() {
        return (
            <div>
                <h1>当前求和为:{this.state.count}</h1>
                <select ref={this.selectedValue}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>&nbsp;
                <button onClick={this.incement}>+</button>&nbsp;
                <button onClick={this.decement}>-</button>&nbsp;
                <button onClick={this.incementIfOdd}>当前求和为奇数加</button>&nbsp;
                <button onClick={this.incementAsync}>异步加</button>&nbsp;
            </div>
        )
    }
}

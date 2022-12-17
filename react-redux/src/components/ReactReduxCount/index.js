import React, { Component } from 'react'
// import { createIncrementAsynAction,createIncrementAction } from '../../redux/count-action'
import store from '../../redux/store'
export default class ReactReaduxCount extends Component {

    state = { carName: '奔驰c63' }
    selectedValue = React.createRef()

    // componentDidMount() {
    //     //监测Redux状态变化，只要变化就调用Render
    //     store.subscribe(
    //         () => {
    //             this.setState({})
    //         }
    //     )
    // }

    increment = () => {
        const value = this.selectedValue.current.value;
        //通知Redux加value
        // store.dispatch(createIncrementAction(value*1))
    }
    decrement = () => {
        const value = this.selectedValue.current.value;

        
    }
    incrementIfOdd = () => {
        let count = store.getState();
        const value = this.selectedValue.current.value;

    }
    incrementAsync = () => {
        const value = this.selectedValue.current.value;

        // store.dispatch(createIncrementAsynAction(value * 1), 500)
    }

    render() {
        return (
            <div>
                <h1>Redux当前求和为:{store.getState()}</h1>
                <select ref={this.selectedValue}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>&nbsp;
                <button onClick={this.increment}>+</button>&nbsp;
                <button onClick={this.decrement}>-</button>&nbsp;
                <button onClick={this.incrementIfOdd}>当前求和为奇数加</button>&nbsp;
                <button onClick={this.incrementAsync}>异步加</button>&nbsp;
            </div>
        )
    }
}

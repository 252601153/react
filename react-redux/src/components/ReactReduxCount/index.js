import React, {Component} from 'react'
import {connect} from "react-redux";
import {createDecrementAction, createIncrementAction, createIncrementAsynAction} from "../../redux/actions/count";
import store from '../../redux/store'

class ReactReaduxCount extends Component {

    state = {carName: '奔驰c63'}
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
        this.props.increment(value * 1)
    }
    decrement = () => {
        const value = this.selectedValue.current.value;
        this.props.decrement(value * 1)
    }
    incrementIfOdd = () => {
        const value = this.selectedValue.current.value;

        let count = this.props.count;
        if (count % 2 !== 0) {
            this.props.increment(value * 1)
        }

    }
    incrementAsync = () => {
        const value = this.selectedValue.current.value;
        this.props.incrementAsync(value * 1, 500)
    }

    render() {
        return (
            <div>
                <h2>我是Count组件</h2>
                <h4>当前求和为:{this.props.count}</h4>
                <h4>下方组件人数的和未：{this.props.personCount}</h4>
                <select ref={this.selectedValue}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>&nbsp;
                <button onClick={this.increment}>+</button>
                &nbsp;
                <button onClick={this.decrement}>-</button>
                &nbsp;
                <button onClick={this.incrementIfOdd}>当前求和为奇数加</button>
                &nbsp;
                <button onClick={this.incrementAsync}>异步加</button>
                &nbsp;
            </div>
        )
    }
}

export default connect(
    state => ({count: state.count, personCount: state.person.length}),
    {
        increment: createIncrementAction,
        decrement: createDecrementAction,
        incrementAsync: createIncrementAsynAction
    }
)(ReactReaduxCount)
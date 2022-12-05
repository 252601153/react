import React from "react";

export class LifeCycleOld extends React.Component {

    constructor(props) {
        console.log('LifecycleOld-constructor')
        super(props)
        //初始化状态
        this.state = { count: 0 }
    }

    UNSAFE_componentWillReceiveProps(props) {
        console.log('LifecycleOld-componentWillReceiveProps', props)
    }

    //组件将要载
    componentWillUnmount() {
        console.log('LifecycleOld-componentWillUnmount')
    }

    componentDidMount() {
        console.log('LifecycleOld-componentDidMount')
    }

    shouldComponentUpdate() {
        console.log('LifecycleOld-shouldComponentUpdate')
        return true
    }

    UNSAFE_componentWillUpdate() {
        console.log('LifecycleOld-componentWillUpdate')
    }

    componentDidUpdate() {
        console.log('LifecycleOld-componentDidUpdate')
    }


    add = () => {
        this.setState(
            (state) => ({
                count: state.count + 1
            })
        )
    }

    force = () => {
        this.forceUpdate()
    }

    render() {
        console.log('LifecycleOld-render')
        const count = this.state.count
        return (

            <div>
                <h1>React旧生命周期</h1>
                <h2>当前求和为{count}</h2>
                <h2>{this.props.carName}</h2>
                <button onClick={this.add}>点我+1</button>
                <button onClick={this.force}>forceUpdate</button>
            </div>
        )
    }
}
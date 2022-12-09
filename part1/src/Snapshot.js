import React from "react";

export class NewsList extends React.Component {

    constructor(props) {
        console.log('LifecycleNew-constructor')
        super(props)
        //初始化状态
        this.state  = { count: 0 }
    }

    //首次刷新时不调用
    UNSAFE_componentWillReceiveProps(props) {
        console.log('LifecycleNew-componentWillReceiveProps', props)
    }

    UNSAFE_componentWillMount() {
        console.log('LifecycleNew-UNSAFE_componentWillMount')
    }

    //组件将要载
    componentWillUnmount() {
        console.log('LifecycleNew-componentWillUnmount')
    }

    componentDidMount() {
        console.log('LifecycleNew-componentDidMount')
    }

    shouldComponentUpdate() {
        console.log('LifecycleNew-shouldComponentUpdate')
        return true
    }

    UNSAFE_componentWillUpdate() {
        console.log('LifecycleNew-componentWillUpdate')
    }

    getSnapshotBeforeUpdate(preProps, preState) {
        console.log('LifeCycleNew-getSnapshotBeforeUpdate')
        return 'hello world'
    }

    componentDidUpdate(a, b, ss) {
        console.log(a, b, ss)
        console.log('LifecycleNew-componentDidUpdate')
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
        console.log('LifecycleNew-render')
        const count = this.state.count
        return (

            <div>
                <h1>getSnapshotBeforeupdate案例</h1>
                <h2>当前求和为{count}</h2>
                <h2>{this.props.carName}</h2>
                <button onClick={this.add}>点我+1</button>
                <button onClick={this.force}>forceUpdate</button>
            </div>
        )
    }
}
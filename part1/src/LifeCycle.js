import React from "react";
import { root2 } from ".";


export class LifeCycle extends React.Component {

    state = { opacity: 1 }

    //卸载组建
    death = () => {
        root2.unmount()
    }

    

    //只调用一次，组件挂载完毕之后
    componentDidMount() {
        this.timer=setInterval(()=> {
            let opacity = this.state.opacity;
            opacity -=0.1
            if (opacity <=0) {
                opacity=1
            }
            this.setState({opacity})

        },200)
    }

    componentWillUnmount() {
        console.log('卸载组建',this.timer)
        clearInterval(this.timer)
    }
     

    render() {
        return (
            <div>
                <h1>React生命周期</h1>
                <h2 style={{ opacity: this.state.opacity }}>React 学不会咋办</h2>
                <button onClick={this.death}>不活了</button>

            </div>
        )
    }
}
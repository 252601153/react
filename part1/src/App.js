import React from "react"
import { LifeCycle } from "./LifeCycle"
import { LifeCycleNew } from "./LifeCycleNew"
import { Login } from "./Login"
import {Person} from "./Person";

const Hello = ({ name, age }) => {

    const bornYear = () => new Date().getFullYear() - age

    return (
        <div>
            <p>
                Hello {name}, you are {age} years old
            </p>
            <p>So you were born in {bornYear()}</p>
        </div>
    )
}

export class App extends React.Component{
    state = {carName:'奔驰'}


    changeCarName = () => {
        this.setState({carName:'奥迪'})
    }

    render() {
        const name = 'Peter'
        const age = 10
    
        return (
            <div>
                <h1>Greetings</h1>
                <Hello name="Maya" age={26 + 10} />
                <Hello name={name} age={age} />
                <Demo></Demo>
                <Login></Login>
                <LifeCycle></LifeCycle>
                <button onClick={this.changeCarName}>更改车名</button>
                {/* <LifeCycleOld carName={this.state.carName}/> */}
                <LifeCycleNew carName={this.state.carName}/>
                <Person/>

            </div>
        )
    }
    }
    

class Demo extends React.Component {

    myRef = React.createRef()

    state = { isHot: true }

    showInfo = () => {
        console.log(this.myRef)
        alert(this.myRef.current.value)
    }

    showData2 = (event) => {
        alert(event.target.value)
    }

    changeWether = () => {
        this.setState((state) => ({ isHot: !state.isHot }));
    }

    createRef = (c) => {
        this.input1 = c;
        console.log('call ref',c);
    }

    render() {
        const { isHot } = this.state
        return (<div>
            <h2>今天天气很{isHot ? '炎热' : '凉爽'}</h2>
            <input ref={this.myRef} type='text' />
            <button onClick={this.showInfo}>点我提示输入的数据</button>
            <button onClick={this.changeWether}>点我提切换天气</button>
            <input onBlur={this.showData2}></input>

        </div>)
    }
}


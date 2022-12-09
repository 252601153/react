
import React from "react";
/**
 * 虚拟domz中key的作用：
 * 1.简单的说：key是虚拟dom对象的标识，在更新显示时，key起着极其重要的作用
 * 2.详细的说：当状态中的数据发生变化时，React会根据【新数据】生成【新的虚拟的dom】，
 * 随后，React进行【新虚拟dom】与旧【虚拟dom】的diff比较，比较规则如下：简单来说，根据key跟新数据
 * 
 */
export class Person extends React.Component {

    state = {
        persons: [
            { id: 1, name: '小张', age: 18 },
            { id: 2, name: '小李', age: 19 },
        ]
    }

     add = () => {

        const {persons} = this.state;
        const p = {id:persons.length +1,name:'小王',age:20}
        this.setState({persons:[...persons,p]})
    }

    render() {
        return <div>
            <h1>React diff算法</h1>
            <button onClick={this.add}>添加一个小王</button>
            <ul>
                {
                    this.state.persons.map(
                        (personObj,index) => {
                            return <li key={index}>
                                {personObj.name}---{personObj.age}
                            </li>
                        }
                    )
                }

            </ul>
        </div>
    }

}
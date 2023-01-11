import React, { useState, useEffect } from 'react'
import { unmountComponentAtNode } from 'react-dom'
import { root } from '..';

export default function EffectHook() {
    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(0);

    //相当于componentDidMount和componentDidUpdate
    useEffect(() => {
        console.log('@useEffect')
        // setCount2((count2) => count2 + 1)
        // // document.title = `You clicked ${count} times`;
        setInterval(() => {
            setCount2((count2) => count2 + 1)
        }, 1000);

        // return () => {
        //     console.log('clear')
        //     clearInterval(id)
        // }
    },[]
    )
    return (
        <>
            <h1>use effect</h1>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)} >Click me</button>
            <p>每秒钟加: {count2}</p>
            <button onClick={() => root.unmount()} >点我卸载组件</button>

        </>
    )
}

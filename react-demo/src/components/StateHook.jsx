import React, { useState } from 'react'

export default function Example() {
    const [count, setCount] = useState(0);
    const [fruit, setFruit] = useState('banana')

    function changeFruit() {
        setFruit('apple')
    }

    return (
        <>
            <h1>state hook</h1>
            <p>you Clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>Click me</button>
            <p>current fruit is {fruit}</p>
            <button onClick={changeFruit}>change fruit</button>
        </>

    )
}
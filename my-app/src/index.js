import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

let a = 100
let value = ""
if (a > 100) {
    value = require("./test.json")
    console.log(value)
} else {
    value = require("./test1.json")
    console.log(value)
}


root.render(<App/>)


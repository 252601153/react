import './App.css';
import React, {useEffect, useState} from 'react';

const ThemeContext = React.createContext('light')

export default class App extends React.Component {
    render() {
        return <ThemeContext.Provider value='lighttt'>
            <Toolbar/>
            <Example/>
        </ThemeContext.Provider>
    }
}

function Toolbar(props) {
    return (
        <div>
            <ThemedButton theme={props.theme}/>
        </div>
    )
}

class ThemedButton extends React.Component {
    static contextType = ThemeContext;

    render() {
        console.log(this.context)

        return <div theme={this.context}> Hello {this.context}</div>
    }
}

function Example() {
    const [count, setCount] = useState(0);
    useEffect(() => {
            document.title = `You clicked ${count} times`
        }
    )

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
        </div>
    );
}
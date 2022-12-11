import React, { Component } from 'react'

export default class ReactRefs extends Component {

    textInput = React.createRef();


    forcusTextInput = () => {
        this.textInput.current.focus();
        alert(this.textInput.current.value)
    }

    render() {
        return (
            <div>
                <h1>React ref程序</h1>
                <input type="text" ref={this.textInput} />
                <input type="button" value="Focus the text input" onClick={this.forcusTextInput} />
            </div>
        )
    }
}


import React, { Component } from 'react'

export default class FileInput extends React.Component {
    constructor(props) {
        super(props);
        this.fileInput = React.createRef();
    }

    handlerSubmit = (event) => {
        event.preventDefault();
        alert(`Selected file -${this.fileInput.current.files[0].name}`)
    }


    render() {
        return (
            <form onSubmit={this.handlerSubmit}>
                <label>
                    Upload file:
                    <input type='file' ref={this.fileInput} />
                </label>
                <br />
                <button type='submit'>Submit</button>
            </form>
        )
    }

}
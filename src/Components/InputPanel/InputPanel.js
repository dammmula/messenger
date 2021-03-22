import React from 'react';
import './InputPanel.css';

export default class InputPanel extends React.Component {
    state = {
        text: ''
    }

    onTextInput = (event) => {
        this.setState({ text: event.target.value });
    }

    onSubmit = (event) => {
        event.preventDefault();
        this.props.onTextSubmit(this.state.text);
        this.setState({ text: '' });
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <input placeholder='message'
                       onChange={this.onTextInput}
                       value={this.state.text}/>
                <button>Send</button>
            </form>
        )
    }
}
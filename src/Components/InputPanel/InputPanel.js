import React from 'react';
import './InputPanel.css';

<<<<<<< HEAD

const InputPanel = (props) => {
    const { text, onTextInput, onTextSubmit,
        onEditedMessageSubmit, messageToEditId} = props;

    const onSubmit = messageToEditId === null ?
        onTextSubmit : onEditedMessageSubmit;

    return (
        <form onSubmit={onSubmit}>
            <input placeholder='message'
                   onChange={onTextInput}
                   value={text}/>
            <button>Send</button>
        </form>
    );
}

export default InputPanel;
=======
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
>>>>>>> afb5b5f... Add project

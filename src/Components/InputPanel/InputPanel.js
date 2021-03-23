import React from 'react';
import './InputPanel.css';

<<<<<<< HEAD
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
=======
>>>>>>> 0ce8f22... Add editing message functionality

const InputPanel = (props) => {
    const { text, onTextInput, onTextSubmit,
        onEditedMessageSubmit, messageToEditId} = props;

    const onSubmit = messageToEditId === null ?
        onTextSubmit : onEditedMessageSubmit;

<<<<<<< HEAD
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
=======
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
>>>>>>> 0ce8f22... Add editing message functionality

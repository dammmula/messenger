import React from 'react';
import './InputPanel.css';


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
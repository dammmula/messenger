import React from 'react';

import './Messages.css';

import Message from "./Message/Message";

const Messages = (props) => {
    const { messages, onDeleteMessage,
        onEditMessage } = props;

    const elements = messages.map((item) => {
        return <Message {...item} onEditMessage={onEditMessage}
                        onDeleteMessage={onDeleteMessage}/>;
    });
    
    return (
        <div className='messages'>
            { elements }
        </div>
    );
}

export default Messages;
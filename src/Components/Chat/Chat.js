import React from 'react';
import './Chat.css';
import Message from "../Message/Message";
import InputPanel from "../InputPanel/InputPanel";


export default class Chat extends React.Component {
    state = {
        messages: [
            this.createMessage('Naruto Uzumaki', "To become Hokage is my dream!", '/images/naruto.jpeg', false),
            this.createMessage('Naruto Uzumaki', "I don't care who I have to fight!", '/images/naruto.jpeg', false),
            this.createMessage('Naruto Uzumaki', "I will never give up or go back on my word, because that's my ninja way!", '/images/naruto.jpeg', false),
            this.createMessage('Sakura Haruno', "*facepalm*", '/images/sakura.jpg', false),
            this.createMessage('Sasuke Uchiha', "here we go again", '/images/sasuke.jpeg', false),
        ]
    }

    messageIds = 0

    setTime() {
        let now = new Date();
        let hours = (String(now.getHours()).length === 1) ? '0' + now.getHours() : now.getHours();
        let minutes = (String(now.getMinutes()).length === 1) ? '0' + now.getMinutes() : now.getMinutes();
        return hours + ':' + minutes;
    }

    createMessage (name, text, image, ownMessage = true) {

        return {
            name,
            text,
            image,
            ownMessage,
            id: this.messageIds++,
            time: this.setTime()
        }
    }

    onTextSubmit = (text) => {
        this.setState(({ messages }) => {
            return {messages: [
                ...messages,
                this.createMessage('You', text, '/images/kakashi.png')
                ]
        }});
    }

    editMessage = (id) => {

    }

    deleteMessage = (id) => {
        this.setState(({ messages }) => {
            return {
                messages: messages.filter((item) => item.id !== id)
            };

        })
    }

    render() {
        let elements = this.state.messages.map((item) => {
            return <Message {...item} onEditMessage={this.editMessage}
                            onDeleteMessage={this.deleteMessage}/>;
        });

        return (
            <div className='chat'>
                <div className='messages'>
                    { elements }
                </div>
                <InputPanel onTextSubmit={this.onTextSubmit}/>

            </div>
        )
    }
}
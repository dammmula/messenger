import React from 'react';
<<<<<<< HEAD
<<<<<<< HEAD

import './Chat.css';

import InputPanel from "../InputPanel/InputPanel";
import Messages from "../Messages/Messages";
=======
=======

>>>>>>> 743f4cf... Add Messages componenet
import './Chat.css';

import InputPanel from "../InputPanel/InputPanel";
<<<<<<< HEAD
>>>>>>> afb5b5f... Add project
=======
import Messages from "../Messages/Messages";
>>>>>>> 743f4cf... Add Messages componenet


export default class Chat extends React.Component {
    state = {
        messages: [
            this.createMessage('Naruto Uzumaki', "To become Hokage is my dream!", '/images/naruto.jpeg', false),
            this.createMessage('Naruto Uzumaki', "I don't care who I have to fight!", '/images/naruto.jpeg', false),
            this.createMessage('Naruto Uzumaki', "I will never give up or go back on my word, because that's my ninja way!", '/images/naruto.jpeg', false),
            this.createMessage('Sakura Haruno', "*facepalm*", '/images/sakura.jpg', false),
            this.createMessage('Sasuke Uchiha', "here we go again", '/images/sasuke.jpeg', false),
<<<<<<< HEAD
        ],
        inputText: '',
        messageToEditId: null
=======
        ]
>>>>>>> afb5b5f... Add project
    }

    messageIds = 0

    setTime() {
        let now = new Date();
<<<<<<< HEAD
        let hours = (String(now.getHours()).length === 1) ?
            '0' + now.getHours() : now.getHours();
        let minutes = (String(now.getMinutes()).length === 1) ?
            '0' + now.getMinutes() : now.getMinutes();
=======
        let hours = (String(now.getHours()).length === 1) ? '0' + now.getHours() : now.getHours();
        let minutes = (String(now.getMinutes()).length === 1) ? '0' + now.getMinutes() : now.getMinutes();
>>>>>>> afb5b5f... Add project
        return hours + ':' + minutes;
    }

    createMessage (name, text, image, ownMessage = true) {
<<<<<<< HEAD
=======

>>>>>>> afb5b5f... Add project
        return {
            name,
            text,
            image,
            ownMessage,
            id: this.messageIds++,
            time: this.setTime()
<<<<<<< HEAD
        };
    }

    sendMessage = (text) => {
        this.setState(({ messages }) => {
            return {messages: [...messages,
                this.createMessage('You', text, '/images/kakashi.png')
                ]};
        });
    }

    onTextSubmit = (event) => {
        event.preventDefault();
        this.sendMessage(this.state.inputText);
        this.setState({ inputText: '' });
    }

    onTextInput = (event) => {
        this.setState({ inputText: event.target.value });
    }

    inputMessageToEdit = (id) => {
        this.setState(({ messages }) => {
            let message = messages.find((item) => item.id === id);
            return {
                inputText: message.text,
                messageToEditId: id
            };
        });
=======
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

>>>>>>> afb5b5f... Add project
    }

    deleteMessage = (id) => {
        this.setState(({ messages }) => {
<<<<<<< HEAD
            if (id === this.state.messageToEditId) {
                return {
                    messages: messages.filter((item) => item.id !== id),
                    inputText: '',
                    messageToEditId: null
                };
            }

            return {
                messages: messages.filter((item) => item.id !== id)
            };
        });
    }
    
    editMessage = (id) => {
        this.setState(({ messages, inputText }) => {
            let newMessages = messages.map((message) => {
                if (message.id === id) {
                    message.text = inputText;
                    return message;
                }
                return message;
            })

            return {
                messages: newMessages,
                inputText: '',
                messageToEditId: null
            }
        });
    }

    onEditedMessageSubmit = (event) => {
        event.preventDefault();
        this.editMessage(this.state.messageToEditId);
    }

    render() {
        return (
            <div className='chat'>
                <Messages messages={this.state.messages}
                          onEditMessage={this.inputMessageToEdit}
                          onDeleteMessage={this.deleteMessage}/>
                <InputPanel onTextInput={this.onTextInput}
                            onTextSubmit={this.onTextSubmit}
                            onEditedMessageSubmit={this.onEditedMessageSubmit}
                            text={this.state.inputText}
                            messageToEditId={this.state.messageToEditId}/>
            </div>
        );
=======
            return {
                messages: messages.filter((item) => item.id !== id)
            };

        })
    }

    render() {
        return (
            <div className='chat'>
                <Messages messages={this.state.messages}
                          onEditMessage={this.editMessage}
                          onDeleteMessage={this.deleteMessage}/>
                <InputPanel onTextSubmit={this.onTextSubmit}/>
            </div>
<<<<<<< HEAD
        )
>>>>>>> afb5b5f... Add project
=======
        );
>>>>>>> 743f4cf... Add Messages componenet
    }
}
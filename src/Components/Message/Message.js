import React from 'react';

import './Message.css';

export default class Message extends React.Component {

    state = {
        liked: false,
    }

    likeClick = () => {
        this.setState(({ liked }) => {
            return {
                liked: !liked
            };
        });
    }

    render() {
        const { name, text, image, ownMessage,
                onEditMessage, onDeleteMessage,
                id, time } = this.props;
        const { liked } = this.state;

        const ownIcons = (
            <div className='icons'>
                <img src='/images/edit.png' alt=''
                        onClick={() => onEditMessage(id)}/>
                <img src='/images/trash.webp' alt=''
                        onClick={() => onDeleteMessage(id)}/>
            </div>
        );

        let heartImg = liked ?
            '/images/heart-black.svg' :
            '/images/heart-thin.svg';

        let icons = ownMessage ? ownIcons :
            (<img className='like' src={heartImg} alt=''
                  onClick={this.likeClick}/>);


        return (
            <div className='message'>
                <img className='avatar' src={image} alt={name}/>

                <div className='message-box'>
                    <span className='nickname'>{name}</span>
                    <p className='text'>{text}</p>
                    <p className='info'>
                        <span className='time'>{time}</span>
                        <span className='icons'>{icons}</span>
                    </p>
                </div>
            </div>
        );
    }
};
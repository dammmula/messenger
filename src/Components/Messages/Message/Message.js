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

<<<<<<< HEAD
        if (ownMessage) {
            return (
                <div className='message '>
                    <div className='message-box own-message'>
                        <span className='nickname'>{name}</span>
                        <p className='text'>{text}</p>
                        <p className='tools'>
                            <div className='info'>
                                <span className='time'>{time}</span>
                                {/*<span className='likes-count'>likes</span>*/}
                            </div>

                            <div className='icons'>
                                <img src='/images/edit.png' alt=''
                                     onClick={() => onEditMessage(id)}/>
                                <img src='/images/trash.webp' alt=''
                                     onClick={() => onDeleteMessage(id)}/>
                            </div>
                        </p>
                    </div>

                    <img className='avatar' src={image} alt={name}/>
                </div>
            );
        }
=======
        const ownIcons = (
            <div className='icons'>
                <img src='/images/edit.png' alt=''
                        onClick={() => onEditMessage(id)}/>
                <img src='/images/trash.webp' alt=''
                        onClick={() => onDeleteMessage(id)}/>
            </div>
        );
>>>>>>> 743f4cf... Add Messages componenet

        let heartImg = liked ?
            '/images/heart-black.svg' :
            '/images/heart-thin.svg';

<<<<<<< HEAD
=======
        let icons = ownMessage ? ownIcons :
            (<img className='like' src={heartImg} alt=''
                  onClick={this.likeClick}/>);


>>>>>>> 743f4cf... Add Messages componenet
        return (
            <div className='message'>
                <img className='avatar' src={image} alt={name}/>

                <div className='message-box'>
                    <span className='nickname'>{name}</span>
                    <p className='text'>{text}</p>
<<<<<<< HEAD
                    <p className='tools'>
                        <span className='time'>{time}</span>
                        <img className='like' src={heartImg} alt=''
                             onClick={this.likeClick}/>
=======
                    <p className='info'>
                        <span className='time'>{time}</span>
                        <span className='icons'>{icons}</span>
>>>>>>> 743f4cf... Add Messages componenet
                    </p>
                </div>
            </div>
        );
    }
};
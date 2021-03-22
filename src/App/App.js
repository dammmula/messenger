import React from 'react';

import './App.css';

import Navbar from "../Components/Navbar/Navbar";
import Chat from "../Components/Chat/Chat";

export default class App extends React.Component {
    render() {
        return(
            <div className='wrapper'>
                <Navbar />
                <Chat />
            </div>
        )
    }
}
import React from 'react';
import './Navbar.css';

export default class Navbar extends React.Component {
    render() {
        return (
            <nav className='navbar'>
                <span>Best ninjas ever ^.^</span>
                <span>4 participants</span>
            </nav>
        )
    }
}
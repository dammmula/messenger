import React from 'react';
import './Navbar.css';

<<<<<<< HEAD
const Navbar = () => {
    return (
        <nav className='navbar'>
            <span>Best ninjas ever ^.^</span>
            <span>4 participants</span>
        </nav>
    );
};

export default Navbar;
=======
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
>>>>>>> afb5b5f... Add project

import { useState } from 'react';
import Nav from './Nav';

function Header() {

    const [navVisible, setNavVisible] = useState(false);

    function toggleNav() {
        console.log('nav:', navVisible);
        setNavVisible( !navVisible );
    }

    return (
        <header className='navbar navbar-expand-lg bg-dark text-white'>
            <h1 className='display-1'>James Waller Jr.</h1>
            <button className='navbar-toggler bg-light' type='button' onClick={toggleNav}>
                <span className="navbar-toggler-icon"></span>
            </button>
            <Nav/>
        </header>
    );
}

export default Header;
import { Link, useLocation } from 'react-router-dom';

function Nav() {
    const currentPage = useLocation().pathname;

    return (
        <ul className='nav nav-tabs'>
            <li className='nav-item'>
                <Link to='/' className={currentPage === '/' ? 'nav-link active' : 'nav-link'}>
                    Home
                </Link>
            </li>
            <li className='nav-item'>
                <Link to='/About' className={currentPage === '/' ? 'nav-link active' : 'nav-link'}>
                    About
                </Link>
            </li>
            <li className='nav-item'>
                <Link to='/Contact' className={currentPage === '/' ? 'nav-link active' : 'nav-link'}>
                    Contact
                </Link>
            </li>
        </ul>
    );
}

export default Nav;
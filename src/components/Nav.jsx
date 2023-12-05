import { Link, useLocation } from 'react-router-dom';

function Nav() {
    const currentPage = useLocation().pathname;

    return (
        <nav style={{fontSize:'1.5em'}}>
            <ul className=' nav nav-tabs nav-justified'>
                <li className='nav-item'>
                    <Link to='/' className={currentPage === '/' ? 'nav-link active' : 'nav-link text-white'}>
                        About
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/Projects' className={currentPage === '/Projects' ? 'nav-link active' : 'nav-link text-white'}>
                        Projects
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/Contact' className={currentPage === '/Contact' ? 'nav-link active' : 'nav-link text-white'}>
                        Contact
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/Resume' className={currentPage === '/Resume' ? 'nav-link active' : 'nav-link text-white'}>
                        Resume
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;
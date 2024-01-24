import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
    return (
        <>
            <Header/>
            <main className='d-block py-4 text-black' style={{fontSize:'1.25em', paddingBottom: '100px'}}>
                <Outlet/>
            </main>
            <Footer/>
        </>
    );
};

export default App;
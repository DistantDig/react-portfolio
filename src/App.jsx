import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
    return (
        <>
            <Header/>
            <main className='d-block p-2 text-black' style={{fontSize:'1.25em'}}>
                <Outlet/>
            </main>
            <Footer/>
        </>
    );
};

export default App;
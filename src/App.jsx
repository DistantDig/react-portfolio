import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
    return (
        <>
            <Header/>
            <main className='d-flex flex-column'>
                <Outlet/>
            </main>
            <Footer/>
        </>
    );
};

export default App;
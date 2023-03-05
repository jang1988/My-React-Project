import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Header from './components/Header/Header';
import Register from './pages/Register/Register';

function App() {
    return (
        <>
        
            <Header />

            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/registration" element={<Register />} />
                <Route path="*" element={<Home />} />
            </Routes>
        </>
    );
}

export default App

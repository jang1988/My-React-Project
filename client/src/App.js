import { Route, Routes } from 'react-router-dom';
import Home from './pages/Teams';
import Login from './pages/Login';
import Register from './pages/Register';
import Header from './components/Header/Header';

import './App.css';
import Players from './pages/Players';

function App() {

    return (
        <>
            <Header />

            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/players" element={<Players />} />
                <Route path="/login" element={<Login />} />
                <Route path="/registration" element={<Register />} />
                <Route path="*" element={<Home />} />
            </Routes>
        </>
    );
}

export default App;

import React from "react";
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Teams';
import Login from './pages/Login';
import Register from './pages/Register';
import Header from './components/Header';

import './App.css';
import Players from './pages/Players';
import PageTeam from './pages/PageTeam';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAuthThunk, selectLogin } from './redux/slices/authSlice';

function App() {
    const dispatch = useDispatch()
    const isAuth = useSelector(selectLogin)
    console.log('isAuth: ', isAuth)

    React.useEffect(() => {
        dispatch(fetchAuthThunk())
    }, [dispatch])

    return (
        <>
            <Header />

            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/players" element={<Players />} />
                <Route path="/login" element={<Login />} />
                <Route path="/registration" element={<Register />} />
                <Route path="*" element={<Home />} />

                <Route path="/team/:id" element={<PageTeam />} />
            </Routes>
        </>
    );
}

export default App;

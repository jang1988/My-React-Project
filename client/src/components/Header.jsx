import React from 'react';
import { Link } from 'react-router-dom';
import style from './Header.module.css';

const Header = () => {
    return (
        <nav className={style.header}>
            <Link to="/" className={style.logo}>
                CompanyLogo
            </Link>
            <div className={style.headerRight}>
                <Link className={style.active} to="/">
                    Home
                </Link>
                <Link to="/login">Вход</Link>
                <Link to="/register">Регистрация</Link>
            </div>
        </nav>
    );
};

export default Header;

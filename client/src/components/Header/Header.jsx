import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import style from './Header.module.css';

const Header = () => {
    const btnsMenu = [
        {
            name: 'Home',
            path: '/',
        },
        {
            name: 'Вход',
            path: '/login',
        },
        {
            name: 'Регистрация',
            path: '/register',
        },
    ];
    let location = useLocation();

    const [activeBtn, setActiveBtn] = useState(0);
    useEffect(() => {
        if (location.pathname === '/') {
            setActiveBtn(0);
        }
        if (location.pathname === '/login') {
            setActiveBtn(1);
        }
        if (location.pathname === '/register') {
            setActiveBtn(2);
        }
    }, [location]);

    return (
        <nav className={style.header}>
            <Link to="/" className={style.logo}>
                CompanyLogo
            </Link>

            <div className={style.headerRight}>
                {btnsMenu.map((btn, index) => {
                    return (
                        <Link
                            onClick={() => setActiveBtn(index)}
                            className={activeBtn === index ? style.active : ''}
                            to={btn.path}
                            key={index}>
                            {btn.name}
                        </Link>
                    );
                })}
            </div>
        </nav>
    );
};

export default Header;

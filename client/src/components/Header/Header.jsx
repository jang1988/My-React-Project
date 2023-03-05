import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import style from './Header.module.css';

const Header = () => {

    const btnsMenu = ['Home', 'Login', 'Registration'];

    
    const [activeBtn, setActiveBtn] = useState('');
    
    localStorage.setItem("activeIndex", activeBtn)

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
                            to={btn.toLowerCase()}
                            key={index}>
                            {btn}
                        </Link>
                    );
                })}
            </div>
        </nav>
    );
};

export default Header;

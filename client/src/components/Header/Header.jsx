import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import style from './Header.module.css';

const Header = () => {

    let location = useLocation();
    
    const btnsMenu = ['Home', 'Login', 'Registration'];

    const [activeBtn, setActiveBtn] = useState('');



    useEffect(() => {

        if (location.pathname || '/' === `/${btnsMenu[0].toLowerCase()}`) {
            setActiveBtn(btnsMenu[0])
        }

        if (location.pathname === `/${btnsMenu[1].toLowerCase()}`) {
            setActiveBtn(btnsMenu[1])
        }

        if (location.pathname === `/${btnsMenu[2].toLowerCase()}`) {
            setActiveBtn(btnsMenu[2])
        }

    }, [location, btnsMenu]);

    const onClickButton = (btn) => {
        setActiveBtn(btn);
    };

    return (
        <nav className={style.header}>
            <Link to="/" className={style.logo}>
                CompanyLogo
            </Link>

            <div className={style.headerRight}>
                {btnsMenu.map((btn) => {
                    return (
                        <Link
                            onClick={() => onClickButton(btn)}
                            className={activeBtn === btn ? style.active : ''}
                            to={btn.toLowerCase()}
                            key={btn}>
                            {btn}
                        </Link>
                    );
                })}
            </div>
        </nav>
    );
};

export default Header;

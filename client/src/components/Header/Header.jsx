import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import style from './Header.module.css';

const Header = () => {
    let location = useLocation();

    let btnsMenu = React.useMemo(() => ['home', 'login', 'registration'], []) ;

    const [activeBtn, setActiveBtn] = useState('');

    useEffect(() => {
        if (location.pathname || '/' === `/${btnsMenu[0]}`) {
            setActiveBtn(btnsMenu[0]);
        }

        if (location.pathname === `/${btnsMenu[1]}`) {
            setActiveBtn(btnsMenu[1]);
        }

        if (location.pathname === `/${btnsMenu[2]}`) {
            setActiveBtn(btnsMenu[2]);
        }
    }, [location.pathname, btnsMenu]);

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
                            to={btn}
                            key={btn}
                        >
                            {btn.toUpperCase()}
                        </Link>
                    );
                })}
            </div>
        </nav>
    );
};

export default Header;

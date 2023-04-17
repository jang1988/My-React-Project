import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import style from './Header.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectLogin } from '../../redux/slices/authSlice';

const Header = () => {
    const dispatch = useDispatch();
    let location = useLocation();
    const isAuth = useSelector(selectLogin);

    let btnsMenu = React.useMemo(() => ['teams', 'players', 'login', 'registration'], []);

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
        if (location.pathname === `/${btnsMenu[3]}`) {
            setActiveBtn(btnsMenu[3]);
        }
    }, [location.pathname, btnsMenu]);

    const onClickButton = (btn) => {
        setActiveBtn(btn);
    };

    const onClickLogout = () => {
        dispatch(logout());
        window.localStorage.removeItem('token')
    };

    return (
        <nav className={style.header}>
            <Link to="/" className={style.logo}>
                <img src="https://www.balldontlie.io/images/cryingjordan.jpeg" alt="logo" />
            </Link>

            <div className={style.headerRight}>
                {isAuth
                    ? btnsMenu.slice(0, 2).map((btn) => {
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
                      })
                    : btnsMenu.slice(2).map((btn) => {
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
                {isAuth && (
                    <button onClick={onClickLogout} className={style.logout}>
                        LOGOUT
                    </button>
                )}
            </div>
        </nav>
    );
};

export default Header;

import React from 'react';
import { Link } from 'react-router-dom';
import style from './Login.module.css';

const Login = () => {
    return (
        <form>
            <div className={style.container}>
                <h1 className={style.title}>Авторизация</h1>
                <div>
                    <p>Введите данные для авторизации</p>
                </div>

                <label htmlFor="email">
                    <b>Email</b>
                </label>

                <input
                    type="text"
                    placeholder="Enter Email"
                    name="email"
                    id="email"
                    autoComplete="on"
                    required
                />

                <label htmlFor="psw">
                    <b>Password</b>
                </label>
                <input
                    type="password"
                    placeholder="Enter Password"
                    name="psw"
                    id="psw"
                    autoComplete="on"
                    required
                />

                <button type="submit" className={style.registerbtn}>
                    Вход
                </button>
                <p>
                    Нет аккаунта? <Link to="/register">Регистрация</Link>
                </p>
            </div>
        </form>
    );
};

export default Login;

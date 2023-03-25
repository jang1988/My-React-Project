import React from 'react';
import { Link } from 'react-router-dom';
import style from './Register.module.css';

const Register = () => {
    return (
        <form>
            <div className={style.container}>
                <h1 className={style.title}>Регистрация</h1>
                <div>
                    <p>Введите данные для регистрации</p>
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

                <label htmlFor="psw-repeat">
                    <b>Repeat Password</b>
                </label>
                <input
                    type="password"
                    placeholder="Repeat Password"
                    name="psw-repeat"
                    id="psw-repeat"
                    autoComplete="on"
                    required
                />

                <button type="submit" className={style.registerbtn}>
                    Регистрация
                </button>
                <p>
                    Есть аккаунт? <Link to="/login">Войти</Link>
                </p>
            </div>
        </form>
    );
};

export default Register;

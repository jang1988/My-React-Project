import React from 'react';
import { Link, Navigate } from 'react-router-dom';
import style from './Login.module.css';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { fetchLoginThunk, selectLogin } from '../../redux/slices/authSlice';

const Login = () => {
    const dispatch = useDispatch();
    const isAuth = useSelector(selectLogin);
    console.log('isAusth: ', isAuth);

    const { register, handleSubmit } = useForm({
        defaultValues: {
            email: 'Petro@test.com',
            password: '12345',
        },
        mode: 'onChange',
    });
    
    const onSubmit = async (values) => {
        const data = await dispatch(fetchLoginThunk(values))

        if (!data.payload) {
            return alert('ERROR!!! WRONG PASSWORD OR LOGIN');
        }

        if ('token' in data.payload) {
            window.localStorage.setItem('token', data.payload.token);
        }
    };

    if (isAuth) {
        return <Navigate to="/" />;
    }

    return (
        <div className={style.container}>
            <h1 className={style.title}>Авторизация</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <p>Введите данные для авторизации</p>
                </div>

                <label htmlFor="email">
                    <b>Email</b>
                </label>

                <input
                    type="email"
                    placeholder="Enter Email"
                    name="email"
                    id="email"
                    autoComplete="on"
                    required
                    {...register('email', { required: 'email' })}
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
                    {...register('password', { required: 'password' })}
                />

                <button type="submit" className={style.registerbtn}>
                    Вход
                </button>
                <p>
                    Нет аккаунта? <Link to="/register">Регистрация</Link>
                </p>
            </form>
        </div>
    );
};

export default Login;

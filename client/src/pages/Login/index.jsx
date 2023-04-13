import React from 'react';
import { Link } from 'react-router-dom';
import style from './Login.module.css';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { fetchLoginThunk } from '../../redux/slices/authSlice';

const Login = () => {

    const dispatch = useDispatch()

    const {
        register,
        handleSubmit,
        setError,
        formState: { errors, isValid },
    } = useForm({
        defaultValues: {
            email: 'Petro@test.com',
            password: '12345',
        },
        mode: 'onChange',
    });

    const onSubmit = (value) => {
        console.log('value: ', value)
        dispatch(fetchLoginThunk(value))
    };

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
                    {...register('email', {required: 'email'})}
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
                    {...register('password', {required: 'password'})}
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

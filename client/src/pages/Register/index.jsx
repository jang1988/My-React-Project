import React from 'react';
import { Link, Navigate } from 'react-router-dom';
import style from './Register.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRegisterThunk, selectLogin } from '../../redux/slices/authSlice';
import { useForm } from 'react-hook-form';

const Register = () => {
    const dispatch = useDispatch();
    const isAuth = useSelector(selectLogin);
    console.log('isAusth: ', isAuth);

    const { register, handleSubmit } = useForm({
        defaultValues: {
            fullName: '',
            email: '',
            password: '',
        },
        mode: 'onChange',
    });

    const onSubmit = async (values) => {
        const data = await dispatch(fetchRegisterThunk(values));

        if (!data.payload) {
            return alert('ERROR!!!REGISTER');
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
            <h1 className={style.title}>Регистрация</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <p>Введите данные для регистрации</p>
                </div>

                <label htmlFor="fullName">
                    <b>Full Name</b>
                </label>
                <input
                    {...register('fullName')}
                    type="text"
                    placeholder="Enter Full Name"
                    name="fullName"
                    id="fullName"
                    autoComplete="on"
                    required
                />

                <label htmlFor="email">
                    <b>Email</b>
                </label>
                <input
                    {...register('email')}
                    type="email"
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
                    {...register('password')}
                />

                <button type="submit" className={style.registerbtn}>
                    Регистрация
                </button>
                <p>
                    Есть аккаунт? <Link to="/login">Войти</Link>
                </p>
            </form>
        </div>
    );
};

export default Register;

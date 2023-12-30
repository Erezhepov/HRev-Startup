import React from 'react';
import s from './AuthForm.module.scss'

const AuthForm = () => {
    return (
        <div className={s.body}>
            <h2>Войти</h2>
            <div className={s.form}>
                <label htmlFor="">
                    <p>Почта</p>
                    <input type="text"/>
                </label>
                <label htmlFor="">
                    <p>Пароль</p>
                    <input type="password"/>
                    <p>Введите корректные данные для входа</p>
                </label>
            </div>
        </div>
    );
};

export default AuthForm;
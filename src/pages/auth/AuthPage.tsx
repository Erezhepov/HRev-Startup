import React from 'react';
import s from './AuthPage.module.scss'
import AuthForm from "../../components/auth/AuthForm";

const AuthPage = () => {
    return (
        <div className={s.auth}>
            <div className={s.bg}>
                <svg xmlns="http://www.w3.org/2000/svg" width="767" height="920" viewBox="0 0 767 920" fill="none">
                    <path d="M622.682 329.173C594.789 182.932 707.904 82.3766 767 0H0V900.472C72.5737 901.973 476.498 900.973 476.498 900.973C476.498 900.973 463.575 962.005 503.869 865.454C541.448 775.407 595.933 767.403 650.053 662.848C704.172 558.293 655.029 498.762 622.682 329.173Z" fill="#A66DF2"/>
                </svg>
            </div>
            <div className={`${s.container} container`}>
                <h2 className={s.title}>Добро пожаловать в HRev!</h2>
                <div className={s.body}>
                    <AuthForm />
                </div>
            </div>
        </div>
    );
};

export default AuthPage;
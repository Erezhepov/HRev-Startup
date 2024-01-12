import React, {useEffect, useState} from 'react';
import s from './AuthPage.module.scss'
import AuthForm from "../../components/auth/AuthForm";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import RegistrationForm from "../../components/registrationForm/RegistrationForm";
import {useAppSelector} from "../../hooks/hooks";

const AuthPage = () => {
    const state = useAppSelector(state => state.registration)
    const [isAuth, setIsAuth] = useState<boolean>(false)
    useEffect(() => {
        toast(state?.error, {
            position: "top-center",
            autoClose: 4500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            type: 'error',
        })
    }, [state?.error]);
    return (
        <div className={s.auth}>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
            />
            <div className={s.bg}>
                <svg xmlns="http://www.w3.org/2000/svg" width="767" height="920" viewBox="0 0 767 920" fill="none">
                    <path d="M622.682 329.173C594.789 182.932 707.904 82.3766 767 0H0V900.472C72.5737 901.973 476.498 900.973 476.498 900.973C476.498 900.973 463.575 962.005 503.869 865.454C541.448 775.407 595.933 767.403 650.053 662.848C704.172 558.293 655.029 498.762 622.682 329.173Z" fill="#A66DF2"/>
                </svg>
            </div>
            <div className={`${s.container} container`}>
                <h2 className={s.title}>Добро пожаловать<br/>в HRev!</h2>
                <div className={s.body}>
                    {isAuth && <AuthForm />}
                    {!isAuth && <RegistrationForm setIsAuth={setIsAuth} />}
                </div>
            </div>
            <div className={s.footer}>
                <div className="container">
                    <div className={s.links}>
                        <a href="#">
                            <img src='icons/insta.svg' alt=""/>
                        </a>
                        <a href="#">
                            <img src='icons/linkedin.svg' alt=""/>
                        </a>
                        <a href="#">
                            <img src='icons/twitter.svg' alt=""/>
                        </a>
                        <a href="#">
                            <img src='icons/whatsapp.svg' alt=""/>
                        </a>
                    </div>
                    <p className={s.rights}>
                        <img src="icons/c.svg" alt=""/>
                        <span>2023 HRev. Все права защищены</span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AuthPage;
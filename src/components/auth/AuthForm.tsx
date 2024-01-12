import React from 'react';
import s from './AuthForm.module.scss'
import {useAppDispatch} from "../../hooks/hooks";
import {SubmitHandler, useForm} from "react-hook-form";
import {Inputs} from "../registrationForm/RegistrationForm";
import {authThunk} from "../../store/thunks/auth.thunk";

const AuthForm = () => {
    const dispatch = useAppDispatch()
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<Inputs>()
    const onSubmit: SubmitHandler<Inputs> = (data) => {
        dispatch(authThunk(data))
        reset()
    }
    return (
        <div className={s.body}>
            <h2>Войти</h2>
            <form onSubmit={handleSubmit(onSubmit)} className={s.form}>
                <label htmlFor="">
                    <p>Почта</p>
                    <input {...register("email", { required: true })} type="text"/>
                    {errors.email && <span>This field is required</span>}
                </label>
                <label htmlFor="">
                    <p>Пароль</p>
                    <input {...register("password", { required: true })} type="password"/>
                    <p>Введите корректные данные для входа</p>
                    {errors.password && <span>This field is required</span>}
                </label>
                <div className={s.btns}>
                    <button className={s.forgetPassword}>
                        Забыли пароль?
                    </button>
                    <button type={'submit'} className={`primary`}>
                        Получить код
                    </button>
                </div>
                <div className={s.otherEntrances}>
                    <p>
                        <span>или</span>
                    </p>
                    <div>
                        <button>Google</button>
                        <button>Microsoft</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default AuthForm;
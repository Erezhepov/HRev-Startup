import React, {FC} from 'react';
import s from './../auth/AuthForm.module.scss'
import s2 from './RegistrationForm.module.scss'
import {registrationThunk} from "../../store/thunks/registration.thunk";
import {useAppDispatch} from "../../hooks/hooks";
import {SubmitHandler, useForm} from "react-hook-form";

interface IRegistrationForm{
    setIsAuth: (isAuth: boolean) => void
}
export type Inputs = {
    first_name: string
    last_name: string
    email: string
    password: string
    phone_number: string
}

const RegistrationForm: FC<IRegistrationForm> = ({setIsAuth}) => {
    const dispatch = useAppDispatch()
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<Inputs>()
    const onSubmit: SubmitHandler<Inputs> = (data) => {
        dispatch(registrationThunk({role: 'Пользователь', ...data}))
        reset()
    }
    function signInHandler(){
        setIsAuth(true)
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)} className={`${s.body} ${s2.body}`}>
            <h2>Регистрация</h2>
            <div className={`${s.form} ${s2.form}`}>
                <label htmlFor="">
                    <p>Имя</p>
                    <input {...register("first_name", { required: true })} type="text"/>
                    {errors.first_name && <span>This field is required</span>}
                </label>
                <label htmlFor="">
                    <p>Фамилия</p>
                    <input type="text" {...register("last_name", { required: true })}/>
                    {errors.last_name && <span>This field is required</span>}
                </label>
                <label htmlFor="">
                    <p>Почта</p>
                    <input type="email" {...register("email", {required: true})}/>
                    {errors.email && <span>This field is required</span>}
                </label>
                <label htmlFor="">
                    <p>Пароль</p>
                    <input type="password"  {...register("password", {required: true})}/>
                    {errors.password && <span>This field is required</span>}
                </label>
                <label htmlFor="">
                    <p>Номер телефона</p>
                    <input type="tel" {...register("phone_number", {required: true})}/>
                    <p>Ваш номер телефона будет использоваться для входа в аккаунт</p>
                    {errors.phone_number && <span>This field is required</span>}
                </label>
                <div className={`${s.btns} ${s2.btns}`}>
                    <p>Уже есть аккаунт?</p>
                    <button onClick={signInHandler} className={s2.signIn}>
                        Войти
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
            </div>

        </form>
    );
};

export default RegistrationForm;
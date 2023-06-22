import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useAddUserMutation } from '../../servises/userApi'
import logo from '../../image/logo.png'
import s from './login.module.css'
import { useState } from 'react'

const Registration = () => {

    const { register, formState: { errors }, handleSubmit } = useForm({
        mode: "onBlur"
    })

    const [user, setUser] = useState({
        username: '',
        email: '',
        password: '',
    })

    const [createUser] = useAddUserMutation()

    const navigate = useNavigate()

    const onSubmit = async () => {
        console.log(user);
        await createUser(user)
        navigate('/')
    }

    return (
    <div className={s.wrapper}>   
        <form className={s.content} onSubmit={handleSubmit(onSubmit)}>
            <img className={s.logo} src={logo}/>
            <input 
                {...register('username', {
                    required: 'Поле обязательно к заполнению',
                    minLength: {
                        value: 5,
                        message: 'Минимум 5 символов'
                    }
                })}
                id='username'
                type='text'
                placeholder='Введите логин'
                onChange={(e) => setUser(
                    { ...user, username: e.target.value }
                )}
                className={s.input}
            />
            <div className={s.errors}>{ errors?.username && <p>{errors?.username?.message}</p> }</div>
            <input 
                {...register('email', {
                    required: 'Поле обязательно к заполнению',
                    minLength: {
                        value: 5,
                        message: 'Минимум 5 символов'
                    }
                })}
                value={user.email}
                id='email'
                type='email'
                placeholder='Введите e-mail'
                onChange={(e) => setUser(
                    { ...user, email: e.target.value }
                )}
                className={s.input}
            />
            <div className={s.errors}>{ errors?.email && <p>{errors?.email?.message}</p> }</div>
            <input
                 {...register('password', {
                    required: 'Поле обязательно к заполнению',
                    minLength: {
                        value: 5,
                        message: 'Минимум 5 символов'
                    }
                })}
                id='password'
                type='password'
                placeholder='Введите пароль' 
                onChange={(e) => setUser(
                    { ...user, password: e.target.value }
                )}
                className={s.input}
            />
            <div className={s.errors}>{ errors?.password && <p>{errors?.password?.message}</p> }</div>    
            
            <button type='submit' className={s.register}>Зарегистрироваться</button>
        </form>
    </div>       
    );
}

export default Registration;
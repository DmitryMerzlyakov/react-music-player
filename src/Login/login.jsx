//import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setUser } from '../store/slices/userSlice'
import { useForm } from 'react-hook-form'
import Input from './input'
import s from './login.module.css'
import logo from './img/logo.png'


const Login = () => {

    const dispatch = useDispatch()
    
    //const [login, setLogin] = useState('')
    //const [password, setPassword] = useState('')
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    console.log(errors);
    // const loginChange = (e) => {
    //     setLogin(e.target.value)
    // }

    // const passwordChange = (e) => {
    //     setPassword(e.target.value)
    //  }
    const onSubmit = (data) => {
        dispatch(
            setUser({
                login: true,
                id: 1,
                email: data.email,
                token: 'blablabla',
                userName: data.email,
            }))
        navigate('/')
    }
    // const handleLogin = (e) => {
    //     e.preventDefault();
    //     localStorage.setItem('user', true)
    //     localStorage.setItem('userName', login)
    //     setUserName(login)
    //     setUser(true)
    //     navigate('/')
    // }


    return (
    <div className={s.wrapper}>   
        <form className={s.content} onSubmit={handleSubmit(onSubmit)}>
            <img className={s.logo} src={logo} alt="" />
            <Input
                type='email'
                placeholder='Введите логин в формате e-mail'
                {...register('email', {
                    required: '(Нужен формат e-mail)',
                    minLength: 4,
                    maxLength: 20,
                })}
            />
            <Input
                type='password'
                placeholder='Введите пароль'  
                {...register('password', {
                    required: '(длина 8-30 символов)',
                    minLength: 8,
                    maxLength: 20,
                })}
                />
                
            <Link to='/'>
                <button className={s.come}>Войти</button>
            </Link>
            <Link to='/registration'>    
                <button className={s.register}>Зарегистрироваться</button>
            </Link>
        </form>
    </div>         
    );
}

export default Login;
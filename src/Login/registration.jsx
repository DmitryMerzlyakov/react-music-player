import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setUser } from '../store/slices/userSlice'
import { useForm } from 'react-hook-form'
import logo from './img/logo.png' 
import Input from './input'
import s from './login.module.css'

const Registration = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    console.log(errors);

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

    return (
    <div className={s.wrapper}>   
        <form className={s.content} onSubmit={handleSubmit(onSubmit)}>
            <img className={s.logo} src={logo}/>
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
                })}/>
            <Input 
                type='password'
                placeholder='Повторите пароль'
                {...register('passwordConfirm', {
                    required: true,
                    minLength: 8,
                    maxLength: 20,
                })} />
                
            <Link to='/'>
                <button className={s.register}>Зарегистрироваться</button>
            </Link>
        </form>
    </div>       
    );
}

export default Registration;
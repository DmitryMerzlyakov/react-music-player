import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useLoginUserMutation } from '../../servises/songsApi'
import { useDispatch } from 'react-redux'
import { setUser } from '../../store/slices/userSlice'
import Input from './input'
import s from './login.module.css'
import logo from '../../image/logo.png'


const Login = () => {

    const dispatch = useDispatch()

    const [loginUser] = useLoginUserMutation()

    const [isUser, setIsUser] = useState({
        email: '',
        password: ''
    })
    const navigate = useNavigate();

    const onSubmit = async (data) => {
        dispatch(
            setUser({
                login: true,
                id: data.id,
                email: data.email,
                userName: data.username
        }))
        await loginUser(isUser)
        navigate('/')
    }
   
    return (
    <div className={s.wrapper}>   
        <form className={s.content} onSubmit={onSubmit}>
            <img className={s.logo} src={logo} alt="" />
            <Input
                type='email'
                placeholder='Введите e-mail'
                onChange={(e) => setIsUser(
                    { ...isUser, email: e.target.value }
                )}
            />
            <Input
                type='password'
                placeholder='Введите пароль'  
                onChange={(e) => setIsUser(
                    { ...isUser, password: e.target.value }
                )}
            />
                
            <button type='submit'className={s.come}>Войти</button>
            <Link to='/registration'>    
                <button className={s.register}>Зарегистрироваться</button>
            </Link>
        </form>
        
    </div>         
    );
}

export default Login;
import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useLoginUserMutation, useGetTokenMutation, useTokenRefreshMutation } from '../../servises/userApi'
import { useDispatch } from 'react-redux'
import { setUser, setRefresh, setAccess, removeUser } from '../../store/slices/userSlice'
import Input from './input'
import s from './login.module.css'
import logo from '../../image/logo.png'


const Login = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate();

    const [postUser] = useLoginUserMutation()
    const [postToken] = useGetTokenMutation()
    const [postTokenRefresh] = useTokenRefreshMutation()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const getAccessToken = (string) => {
        postTokenRefresh({ refresh: string }).unwrap()
            .then((data) => {
                dispatch(setUser({ id: localStorage.getItem('userId') }))
                dispatch(setRefresh({ refresh: string }))
                dispatch(setAccess({ access: data.access }))
                navigate('/')
            })
            .catch((e) => {
                removeUser()
                localStorage.clear()
                console.error(e.data.detail)
            })
    }

    const onSubmit = async (e) => {
        e.preventDefault()

        await postToken({ email, password }).unwrap().then((token) => {
            
            localStorage.setItem('token', token.refresh)
            
            postUser({ email, password }).then((user) => {
                localStorage.setItem('user', JSON.stringify(user.data))
                localStorage.setItem('userId', JSON.stringify(user.data.id))
                localStorage.setItem('username', JSON.stringify(user.data.username))
                dispatch(
                    setUser({
                        login: true,
                        id: user.data.id,
                        email: user.data.email,
                        token: token.access,
                        userName: user.data.username
                }))
            })
            navigate('/')
        })
    }

    useEffect(() => {
        const storageRefresh = localStorage.getItem('refresh')
        if (!storageRefresh) return
        getAccessToken(storageRefresh)
    }, [])
   
    return (
    <div className={s.wrapper}>   
        <form className={s.content} onSubmit={onSubmit}>
            <img className={s.logo} src={logo} />
            <Input
                type='email'
                placeholder='Введите e-mail'
                onChange={(e) => setEmail( e.target.value )}
            />
            <Input
                type='password'
                placeholder='Введите пароль'  
                onChange={(e) => setPassword( e.target.value )}
            />
            <button type='submit' className={s.come}>Войти</button>
            
            <Link to='/registration'>    
                <button className={s.register}>Зарегистрироваться</button>
            </Link>
        </form>
        
    </div>         
    );
}

export default Login;
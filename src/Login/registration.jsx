import { useNavigate } from 'react-router-dom'
import { useAddUserMutation } from '../store/songsApi'
import logo from './img/logo.png' 
import Input from './input'
import s from './login.module.css'
import { useState } from 'react'

const Registration = () => {

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
        <form className={s.content} onSubmit={onSubmit}>
            <img className={s.logo} src={logo}/>
            <Input 
                id='username'
                type='text'
                placeholder='Введите логин'
                onChange={(e) => setUser(
                    { ...user, username: e.target.value }
                )}
            />
            <Input 
                value={user.email}
                id='email'
                type='email'
                placeholder='Введите e-mail'
                onChange={(e) => setUser(
                    { ...user, email: e.target.value }
                )}
            />
            <Input
                id='password'
                type='password'
                placeholder='Введите пароль' 
                onChange={(e) => setUser(
                    { ...user, password: e.target.value }
                )}
            />
                
            <button type='submit' className={s.register}>Зарегистрироваться</button>
        </form>
    </div>       
    );
}

export default Registration;
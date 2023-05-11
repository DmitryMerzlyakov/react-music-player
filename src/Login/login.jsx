import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import s from './login.module.css'
import logo from './img/logo.png';
import { useState } from 'react';


const Login = ({setUserName, setUser}) => {
    
    const [login, setLogin] = useState('')
    // const [password, setPassword] = useState('')
    const navigate = useNavigate();


    const loginChange = (e) => {
        setLogin(e.target.value)
    }

    // const passwordChange = (e) => {
    //     setPassword(e.target.value)
    // }

    const handleLogin = (e) => {
        e.preventDefault();
        localStorage.setItem('user', true)
        localStorage.setItem('setUserName', login)
        setUserName(login)
        setUser(true)
        navigate('/playlist')
    }


    return (
    <div className={s.wrapper}>   
        <div className={s.content}>
            <img className={s.logo} src={logo} alt="" />
            <input
                className={s.login} 
                type="text"
                placeholder="Логин"
                onChange={loginChange}
                />
            <input
                className={s.password}
                type="password"
                placeholder="Пароль"
                // onChange={passwordChange}
            />
            <Link to='/'>
                <button className={s.come} onClick={handleLogin}>Войти</button>
            </Link>
            <Link to='/registration'>    
            <button className={s.register}>Зарегистрироваться</button>
            </Link>
        </div>
    </div>         
    );
}

export default Login;
import { Link } from 'react-router-dom';
import s from './login.module.css';
import logo from './img/logo.png'

const Registration = () => {
    return (
    <div className={s.wrapper}>   
        <div className={s.content}>
            <img className={s.logo} src={logo}/>
            <input className={s.login} type="text" placeholder="Логин"/>
            <input className={s.password} type="password" placeholder="Пароль" />
            <input className={s.password} type="password" placeholder="Повторите пароль" />
            <Link to='/playlist'>
                <button className={s.register}>Зарегистрироваться</button>
            </Link>
        </div>
    </div>       
    );
}

export default Registration;
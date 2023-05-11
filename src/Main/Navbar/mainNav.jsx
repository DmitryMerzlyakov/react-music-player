import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from './img/logo.png';
import s from './css/mainNav.module.css'

const Nav = ({ user }) => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => setVisible(!visible)

    return (
      <nav className={s.main__nav}>
          <Logo />
          <Burger onClick={toggleVisible} />
          {visible && <Menu user={ user }/>}
        </nav>
    );
}

const Logo = () => {
  return (
    <Link to='/'>
      <div className={s.nav__logo}>
        <img src={logo} className={s.logo__image} alt="logo"/>
      </div>
    </Link>);
};

const Burger = ({onClick}) => {
  return (
    <div onClick={onClick} className={s.nav__burger}>
      <span className={s.burger__line}></span>
      <span className={s.burger__line}></span>
      <span className={s.burger__line}></span>
    </div>);
}

const Menu = ({user}) => {
  return(
    <div className={s.nav__menu}>
      <ul className={s.menu__list}>
            <li className={s.menu__item}><Link className={s.menu__link} to='/'>Главное</Link></li>
            {user ? 
               <li className={s.menu__item}>
                <Link className={s.menu__link} to='/playlist/mymusic'>Мой плейлист</Link>
              </li> : ''
            }
            <li className={s.menu__item}><Link className={s.menu__link} to='/login'>Войти</Link></li>
        </ul>
    </div>);
}

export default Nav;
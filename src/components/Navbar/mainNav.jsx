import { useState } from 'react';
import logo from './img/logo.png';
import s from './css/mainNav.module.css'

const Nav = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => setVisible(!visible)

    return (
      <nav className={s.main__nav}>
          <Logo />
          <Burger onClick={toggleVisible} />
          {visible && <Menu />}
        </nav>
    );
}

const Logo = () => {
  return (
    <div className={s.nav__logo}>
      <img src={logo} className={s.logo__image} alt="logo"/>
    </div>);
};

const Burger = ({onClick}) => {
  return (
    <div onClick={onClick} className={s.nav__burger}>
      <span className={s.burger__line}></span>
      <span className={s.burger__line}></span>
      <span className={s.burger__line}></span>
    </div>);
}

const Menu = () => {
  return(
    <div className={s.nav__menu}>
      <ul className={s.menu__list}>
            <li className={s.menu__item}><a href="#" className={s.menu__link}>Главное</a></li>
            <li className={s.menu__item}><a href="#" className={s.menu__link}>Мой плейлист</a></li>
            <li className={s.menu__item}><a href="#" className={s.menu__link}>Войти</a></li>
        </ul>
    </div>);
}

export default Nav;
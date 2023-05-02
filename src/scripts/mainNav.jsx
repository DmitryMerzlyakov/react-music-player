import { useState } from 'react';
import logo from '../assets/img/logo.png';
import '../assets/css/style.scss';

const Nav = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => setVisible(!visible)

    return (
        <nav className='main__nav nav'>
          <Logo />
          <Burger onClick={toggleVisible} />
          {visible && <Menu />}
        </nav>
    );
}

const Logo = () => {
  return (
    <div className="nav__logo logo">
      <img src={logo} className="logo__image" alt="logo"/>
    </div>);
};

const Burger = ({onClick}) => {
  return (
    <div onClick={onClick} className="nav__burger burger">
      <span className="burger__line"></span>
      <span className="burger__line"></span>
      <span className="burger__line"></span>
    </div>);
}

const Menu = () => {
  return(
    <div className="nav__menu menu">
        <ul className="menu__list">
            <li className="menu__item"><a href="#" className="menu__link">Главное</a></li>
            <li className="menu__item"><a href="#" className="menu__link">Мой плейлист</a></li>
            <li className="menu__item"><a href="#" className="menu__link">Войти</a></li>
        </ul>
    </div>);
}

export default Nav;
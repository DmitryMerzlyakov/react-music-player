import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTheme, THEME_DARK, THEME_LIGHT } from '../../provaider/Theme'
import Choose from '../chooseTheme/chooseTheme';
import logoDark from './img/logoDark.png';
import logoLight from './img/logoLight.png';
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

  const [logo, setlogo] = useState(logoDark)

  const isTheme = useTheme();

  useEffect(() => {
        switch (isTheme.theme) {
            case THEME_DARK: setlogo(logoDark);  break;
            case THEME_LIGHT: setlogo(logoLight);  break;
            default: setlogo(logoDark)
        }
    }, [isTheme])

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
      <div className={s.burger__line}></div>
      <div className={s.burger__line}></div>
      <div className={s.burger__line}></div>
    </div>);
}

const Menu = ({user}) => {
  return(
    <div className={s.nav__menu}>
      <ul className={s.menu__list}>
            <li className={s.menu__item}><Link className={s.menu__link} to='/'>Главное</Link></li>
            <li className={s.menu__item}><Link className={s.menu__link} to='/playlist/mymusic'>Мой плейлист</Link></li>
            <li className={s.menu__item}><Link className={s.menu__link} to='/login'>{user ? '' : 'Выйти'}</Link></li>
            <Choose/>
      </ul>
    </div>);
}

export default Nav;
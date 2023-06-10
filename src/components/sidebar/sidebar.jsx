import { Link } from 'react-router-dom';
import { useTheme, THEME_DARK, THEME_LIGHT } from '../../provaider/Theme'
import SidebarItem from './sidebarItem';
import playlist01 from '../../image/playlist01.png';
import playlist02 from '../../image/playlist02.png';
import playlist03 from '../../image/playlist03.png';
import exitDark from '../../image/exitDark.png';
import exitLight from '../../image/exitLight.png';
import s from './css/mainSidebar.module.css'
import { useEffect, useState } from 'react';


const Sidebar = () => {
    
    const [icon, setIcon] = useState(exitDark)
    const isTheme = useTheme();

    useEffect(() => {
        switch (isTheme.theme) {
            case THEME_DARK: setIcon(exitDark);  break;
            case THEME_LIGHT: setIcon(exitLight);  break;
            default: setIcon(exitDark)
        }
    }, [isTheme])

    return (
        <>
        <div className={s.main__sidebar}>
            <div className={s.sidebar__personal}>
                <p className={s.sidebar__personalname}>Юзер</p>
                <div className={s.sidebar__avatar}>
                    <img src={icon} alt="exit" /> 
                </div>
            </div>
            <div className={s.sidebar__block}>
                <div className={s.sidebar__list}>
                    <Link to='/playlist/dayplaylist'>
                        <SidebarItem src={playlist01} alt="day's playlist" />
                    </Link> 
                    <Link to='/playlist/hits'>
                        <SidebarItem src={playlist02} alt="hits playlist" />
                    </Link>
                    <Link to='/playlist/indi'>
                        <SidebarItem src={playlist03} alt="indi playlist" />
                    </Link>
                </div> 
            </div>
        </div> 
        </>    
    );
}

export default Sidebar;
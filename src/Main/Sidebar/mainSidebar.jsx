import { Link } from 'react-router-dom';
import SidebarItem from './sidebarItem';
import playlist01 from './img/playlist01.png';
import playlist02 from './img/playlist02.png';
import playlist03 from './img/playlist03.png';
import s from './css/mainSidebar.module.css'


const Sidebar = ({ userName}) => {
    return (
        <>
        <div className={s.main__sidebar}>
            {/* {
                user ?
            <> */}
            <div className={s.sidebar__personal}>
                <p className={s.sidebar__personalname}>{ userName }</p>
                <div className={s.sidebar__avatar}>
                            
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
            {/* </>
             : ''} */}
        </div> 
        </>    
    );
}

export default Sidebar;
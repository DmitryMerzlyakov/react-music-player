import SidebarItem from './sidebarItem';
import playlist01 from './img/playlist01.png';
import playlist02 from './img/playlist02.png';
import playlist03 from './img/playlist03.png';
import s from './css/mainSidebar.module.css'


const Sidebar = () => {
    return (
        <div className={s.main__sidebar}>
            <div className={s.sidebar__personal}>
                <p className={s.sidebar__personalname}>Sergey.Ivanov</p>
                <div className={s.sidebar__avatar}>
                            
                </div>
            </div>
            <div className={s.sidebar__block}>
            <div className={s.sidebar__list}>
                    <SidebarItem link="#" src={playlist01} alt="day's playlist" />
                    <SidebarItem link="#" src={playlist02} alt="day's playlist" />
                    <SidebarItem link="#" src={playlist03} alt="day's playlist"/>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
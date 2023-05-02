import SidebarItem from './sidebarItem';
import playlist01 from '../assets/img/playlist01.png';
import playlist02 from '../assets/img/playlist02.png';
import playlist03 from '../assets/img/playlist03.png';
import '../assets/css/style.scss';


const Sidebar = () => {
    return (
        <div className="main__sidebar sidebar">
            <div className="sidebar__personal">
                <p className="sidebar__personal-name">Sergey.Ivanov</p>
                <div className="sidebar__avatar">
                            
                </div>
            </div>
            <div className="sidebar__block">
                <div className="sidebar__list">
                    <SidebarItem link="#" src={playlist01} alt="day's playlist" />
                    <SidebarItem link="#" src={playlist02} alt="day's playlist" />
                    <SidebarItem link="#" src={playlist03} alt="day's playlist"/>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
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
                    <div className="sidebar__item">
                        <a className="sidebar__link" href="#">
                            <img className="sidebar__img" src={playlist01} alt="day's playlist"/>
                        </a>
                    </div>
                    <div className="sidebar__item">
                        <a className="sidebar__link" href="#">
                            <img className="sidebar__img" src={playlist02} alt="day's playlist"/>
                        </a>
                    </div>
                    <div className="sidebar__item">
                        <a className="sidebar__link" href="#">
                            <img className="sidebar__img" src={playlist03} alt="day's playlist"/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
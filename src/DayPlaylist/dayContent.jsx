import DaySearch from "./daySearch";
import DayPlaylist from "./dayPlaylist";
import s from '../Main/Content/css/mainContent.module.css'


const DayContent = () => {
    return (
    <div className={s.centerblock}>
        <DaySearch />
        <DayPlaylist/>
    </div>
    )
}

export default DayContent;
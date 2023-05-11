import MySearch from "./mySearch";
import MyPlaylist from "./myPlaylist";
import s from '../Main/Content/css/mainContent.module.css'


const MyContent = () => {
    return (
    <div className={s.centerblock}>
        <MySearch />
        <MyPlaylist/>
    </div>
    )
}

export default MyContent;
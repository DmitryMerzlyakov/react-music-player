import HistSearch from "./hitsSearch";
import HitsPlaylist from "./hitsPlaylist";
import s from '../Main/Content/css/mainContent.module.css'


const HitsContent = () => {
    return (
    <div className={s.centerblock}>
        <HistSearch />
        <HitsPlaylist/>
    </div>
    )
}

export default HitsContent;
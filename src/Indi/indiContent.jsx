import IndiSearch from "./indiSearch";
import IndiPlaylist from "./indiPlaylist";
import s from '../Main/Content/css/mainContent.module.css'


const IndiContent = () => {
    return (
    <div className={s.centerblock}>
        <IndiSearch />
        <IndiPlaylist/>
    </div>
    )
}

export default IndiContent;
import Search from './contentSearch';
import Playlist from './contentPlaylist';
import s from './css/mainContent.module.css'

const Content = () => {
    return (
    <div className={s.centerblock}>
        <Search />
        <Playlist />
    </div>
    );
}


export default Content;
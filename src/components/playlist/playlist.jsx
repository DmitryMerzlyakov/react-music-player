import Content from '../contentPlaylist/contentPlaylist';
import Search from '../contentSearch/contentSearch';
import s from './css/mainContent.module.css'

const Playlist = () => {
    return (
    <div className={s.centerblock}>
        <Search />
        <Content/>     
    </div>
    );
}


export default Playlist;
import Search from './contentSearch';
import Playlist from './contentPlaylist';
import '../assets/css/style.scss';

const Content = () => {
    return (
    <div className='main__centerblock centerblock'>
        <Search />
        <Playlist />
    </div>
    );
}


export default Content;
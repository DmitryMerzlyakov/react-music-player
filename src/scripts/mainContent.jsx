import Search from '../scripts/contentSearch';
import Playlist from '../scripts/contentPlaylist';
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
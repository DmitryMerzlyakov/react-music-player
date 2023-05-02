import sprite from '../assets/icon/sprite.svg';
import Song from './playlistItem';
import '../assets/css/style.scss';

const Playlist = () => {
    return (
        <div className="centerblock__content">
            <div className="content__title playlist-title">
                <div className="playlist-title__col col01">Трек</div>
                <div className="playlist-title__col col02">ИСПОЛНИТЕЛЬ</div>
                <div className="playlist-title__col col03">АЛЬБОМ</div>
                <div className="playlist-title__col col04">
                    <svg className="playlist-title__svg" alt="time">
                        <use xlinkHref={`${sprite}#icon-watch`}></use>
                    </svg>
                </div>
            </div>
                <div className="content__playlist playlist">
                <Song
                    title="Guilt"
                    author="Nero"
                    album="Welcome Reality"
                    time="4:44"
                />
                 <Song
                    title="Elektro"
                    author="Dynoro, Outwork, Mr. Gee"
                    album="Elektro"
                    time="2:22"
                />
                 <Song
                    title="I’m Fire"
                    author="Ali Bakgor"
                    album="I’m Fire"
                    time="2:22"
                />
                
            </div>    
        </div>
    );
}

export default Playlist;
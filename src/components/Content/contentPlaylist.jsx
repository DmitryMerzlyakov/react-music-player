import sprite from './icon/sprite.svg';
import Song from './playlistItem';
import s from './css/contentPlaylist.module.css'

const Playlist = () => {
    return (
        <div className={s.centerblock__content}>
            <div className={s.content__title}>
                <div className={`${s.playlisttitlecol} ${s.col01}`}>Трек</div>
                <div className={`${s.playlisttitlecol} ${s.col02}`}>ИСПОЛНИТЕЛЬ</div>
                <div className={`${s.playlisttitlecol} ${s.col03}`}>АЛЬБОМ</div>
                <div className={`${s.playlisttitlecol} ${s.col04}`}>
                    <svg className={s.playlisttitlesvg} alt="time">
                        <use xlinkHref={`${sprite}#icon-watch`}></use>
                    </svg>
                </div>
            </div>
                <div className={s.contentplaylist}>
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
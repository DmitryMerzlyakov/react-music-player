import sprite from '../../image/sprite.svg';
import Song from '../song/song';
import { useGetSongsQuery } from '../../store/songsApi';
import s from './contentPlaylist.module.css'

const Content = () => {

    const { data = [] } = useGetSongsQuery()

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
            <ul className={s.contentplaylist}>
                {data.map(item => (
                    <Song key={item.id}
                        title={item.name}
                        author={item.author}
                        album={item.album}
                        time={item.duration_in_seconds}
                />
                ))}
            </ul>    
        </div>
    );
}

export default Content;
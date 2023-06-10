import sprite from '../../image/sprite.svg';
import Song from '../song/song';
import SkeletonPlaylist from '../playlist/Skeleton/playlistSkeleton';
import { useGetAllTracksQuery } from '../../servises/songsApi';
import s from './contentPlaylist.module.css'

const Content = () => {

    const { data = [], isLoading } = useGetAllTracksQuery()

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
                {
                isLoading ?
                    <SkeletonPlaylist />
                            :
                    <ul className={s.contentplaylist}>
                        {data.map(item => (
                            <Song key={item.id}
                                title={item.name}
                                author={item.author}
                                album={item.album}
                                time={item.duration_in_seconds}
                                stared_user={item.stared_user}
                            />
                        ))}
                    </ul> 
                }
        </div>
    );
}

export default Content;
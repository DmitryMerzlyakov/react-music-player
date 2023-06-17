import sprite from '../../image/sprite.svg';
import Song from '../song/song';
import SkeletonPlaylist from '../playlist/Skeleton/playlistSkeleton';
import { useGetAllTracksQuery } from '../../servises/songsApi';
import { useSelector } from 'react-redux';
import s from './contentPlaylist.module.css'
import { setAuthor, setGenre, setSearchTrack, setYear } from '../../store/slices/faiterSlice';

const Content = () => {

    const author = useSelector(setAuthor)
    const filterAuthor = author.payload.filter.author
    const genre = useSelector(setGenre)
    const filterGenre = genre.payload.filter.genre
    const year = useSelector(setYear)
    const filterYear = year.payload.filter.age
    const search = useSelector(setSearchTrack)
    const searchTrack = search.payload.filter.name
 
    const { data = [], isLoading } = useGetAllTracksQuery()

    let trackData = data

    if (filterAuthor.length > 0) {
        trackData = trackData.filter((track) =>
            track.author.includes(filterAuthor))
    }
    if (filterGenre.length > 0) {
        trackData = trackData.filter((track) =>
            track.genre.includes(filterGenre))
    }
    if (searchTrack.length > 0) {
        trackData = trackData.filter((track) =>
            track.name.toLowerCase().includes(searchTrack.toLowerCase())
        );
    }

    switch (filterYear) {
        case 'newer':
        trackData = trackData.filter((el) => el).sort(({ release_date: adate }, { release_date: bdate }) => new Date(bdate).valueOf() - new Date(adate).valueOf())
        break
        case 'older':
        trackData = trackData.filter((el) => el).sort(({ release_date: adate }, { release_date: bdate }) => new Date(adate).valueOf() - new Date(bdate).valueOf())
        break
        default:
        break
    }

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
                        {trackData.map(item => (
                            <Song key={item.id}
                                title={item.name}
                                author={item.author}
                                album={item.album}
                                time={item.duration_in_seconds}
                                stared_user={item.stared_user}
                                id={item.id}
                            />
                        ))}
                    </ul> 
                }
        </div>
    );
}

export default Content;
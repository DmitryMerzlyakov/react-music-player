import sprite from './icon/sprite.svg';
import SkeletonPlaylist from './Skeleton/playlistSkeleton';
import { useState, useEffect } from 'react';
import s from './css/playlistItem.module.css'


const Song = ({ title, author, album, time }) => {

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000)
        return () => clearTimeout(timer);
    });

    return (
        <div className={s.playlist__item}>
            {loading ? (
                <SkeletonPlaylist />
            ) : (
                    <div className={s.playlist__track}>
                    <div className={s.track__title}>
                        <div className={s.track__titleimage}>
                            <svg className={s.track__titlesvg} alt="music">
                                <use xlinkHref={`${sprite}#icon-note`}></use>
                            </svg>
                        </div>
                        <div>
                                <a className={s.track__titlelink} href="http://">{title}
                                    <span className={s.track__titlespan}></span>
                                </a>
                        </div>
                    </div>
                        <div className={s.track__author}>
                            <a className={s.track__authorlink} href="http://">{author}</a>
                    </div>
                    <div className={s.track__album}>
                        <a className={s.track__albumlink} href="http://">{album}</a>
                    </div>
                    <div>
                            <svg className={s.track__timesvg} alt="time">
                            <use xlinkHref={`${sprite}#icon-like`}></use>
                        </svg>
                        <span className={s.track__timetext}>{time}</span>
                    </div>
                </div>)}
        </div>
    );
}


export default Song;
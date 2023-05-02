import sprite from '../assets/icon/sprite.svg';
import SkeletonPlaylist from './playlistSkeleton';
import { useState, useEffect } from 'react';


const Song = ({ title, author, album, time }) => {

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000)
        return () => clearTimeout(timer);
    });

    return (
        <div className="playlist__item">
            {loading ? (
                <SkeletonPlaylist />
            ) : (
                <div className="playlist__track track">
                    <div className="track__title">
                        <div className="track__title-image">
                            <svg className="track__title-svg" alt="music">
                                <use xlinkHref={`${sprite}#icon-note`}></use>
                            </svg>
                        </div>
                        <div className="track__title-text">
                            <a className="track__title-link" href="http://">{title}<span className="track__title-span"></span></a>
                        </div>
                    </div>
                    <div className="track__author">
                        <a className="track__author-link" href="http://">{author}</a>
                    </div>
                    <div className="track__album">
                        <a className="track__album-link" href="http://">{album}</a>
                    </div>
                    <div className="track__time">
                        <svg className="track__time-svg" alt="time">
                            <use xlinkHref={`${sprite}#icon-like`}></use>
                        </svg>
                        <span className="track__time-text">{time}</span>
                    </div>
                </div>)}
        </div>
    );
}


export default Song;
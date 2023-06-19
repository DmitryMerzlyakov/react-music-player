// import { useSelector } from 'react-redux'
import { useState, useEffect } from 'react';
import { useSetLikeMutation, useSetUnlikeMutation } from '../../servises/songsApi';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../../store/slices/userSlice';
import sprite from '../../image/sprite.svg';
import s from './song.module.css'
import { setTrackPlay } from '../../store/slices/trackSlice';


const Song = (props) => {

    const {title, author, album, time, stared_user, id} = props

    const dispatch = useDispatch(setTrackPlay)
    const selector = useSelector(setUser)

    const userId = selector.payload.user.id
    
    const [setLike] = useSetLikeMutation()
    const [setUnlike] = useSetUnlikeMutation()    
      
    useEffect(() => {
        setFavourite(stared_user.some((user) => user.id === userId))
    }, [props])
    
    const [isFavourite, setFavourite] = useState('')
       
    const handleSetLike = () => {
        if (isFavourite) {
            setUnlike(props.id)
            setFavourite(false)
        }
        else {
            setLike(props.id)
            setFavourite(true)
        }
    }

    const handleSetTrack = (e) => {
        e.preventDefault;
        dispatch(
            setTrackPlay({
                id,
                isFavourite
            })
        );
    };

    return (
        <div className={s.playlist__item}>
            <div className={s.playlist__track} onClick={handleSetTrack}>
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
                    <svg className={s.track__timesvg} alt="time" onClick={handleSetLike}>
                        <use xlinkHref={`${sprite}#icon-${isFavourite ? 'like' : 'dislike'}`}></use>
                    </svg>
                    <span className={s.track__timetext}>{(time / 60).toFixed(2)}</span>
                </div>
            </div>
        </div>
    );
}


export default Song;
import sprite from '../../image/sprite.svg';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useGetAllTracksQuery, useSetLikeMutation, useSetUnlikeMutation } from '../../servises/songsApi';
import { setTrackPlay } from '../../store/slices/trackSlice';
import { useAudio } from 'react-use';
import { useRef } from 'react';
import s from './css/mainFooter.module.css'

const Footer = ({id}) => {

    const { data = [] } = useGetAllTracksQuery()

    const tracks = data

    const [setLike] = useSetLikeMutation()
    const [setUnlike] = useSetUnlikeMutation() 

    const dispatch = useDispatch();

    const [isShuffle, setShuffle] = useState(false)
    const [isRepeat, setRepeat] = useState(false)  
    const [isFavourite, setFavourite] = useState(false)
    
    let index = tracks.findIndex((track) => track.id === id)
    
    useEffect(() => {
        dispatch(setTrackPlay({ id: tracks[index === -1 ? 0 : index].id }))
        console.log(tracks[index].id)
    }, [id])
        
    const playingTrack = tracks[index]
        
    const [audio, state, controls] = useAudio({
        src: playingTrack.track_file,
        autoPlay: true,
        onEnded: () => {
            if (!isRepeat) {
                handleNext()
            } else {
                controls.seek(0)
                controls.play()
            }
        },
    })

    const getRandom = () => Math.floor(Math.random() * tracks.length)

    const handleNext = () => {
        if (isShuffle) {
        index = getRandom()
        } else index++

        index = index > tracks.length - 1 ? null : tracks[index].id
        dispatch(setTrackPlay({ id: index }))
    }

    const handlePrev = () => {
        if (isShuffle) {
        index = getRandom()
        } else index--

        index = index < 0 ? null : tracks[index].id
        dispatch(setTrackPlay({ id: index }))
    }

    const handleValueChange = (e) => {
        controls.volume(Number(e.target.value) / 10)
    }

    useEffect(() => {
        controls.volume(0.5)
    }, [])

    const handleSetLike = () => {
        if (isFavourite) {
            setUnlike(id)
            setFavourite(false)
        }
        else {
            setLike(id)
            setFavourite(true)
        }
    }

    const progressRef = useRef(null)

    useEffect(() => {
        progressRef.current.value = state.time || 0
        progressRef.current.style.setProperty('--seek-before-width', `${(state.time / state.duration) * 100}%`)
    }, [state.time, state.duration])

    const handleProgressChange = () => {
        controls.seek(Number(progressRef.current.value))
    }

    
    return (
        <div className={s.bar}>
            {audio}
            <div className={s.content}>
                    <input 
                        type='range' 
                        step='0.01'
                        className={s.progress}
                        min="0" 
                        max={state.duration} 
                        ref={progressRef}
                        onChange={handleProgressChange}
                    />
                    <div className={s.block}>
                        <div className={s.player}>
                            <div className={s.controls}>
                                <div className={s.prev} onClick={handlePrev}>
                                        <svg className={s.prevsvg} alt="prev">
                                            <use xlinkHref={`${sprite}#icon-prev`}></use>
                                        </svg>
                                    </div>
                                <div className={s.play}>
                                    {
                                    state.playing ?  
                                        <svg className={s.stopsvg} alt="play" onClick={controls.pause}>
                                            <use xlinkHref={`${sprite}#icon-pause`}></use> 
                                        </svg>
                                        :
                                        <svg className={s.playsvg} alt="play" onClick={controls.play}>
                                            <use xlinkHref={`${sprite}#icon-play`}></use> 
                                        </svg>
                                    } 
                                </div>
                                <div className={s.next} onClick={handleNext}>
                                    <svg className={s.nextsvg} alt="next">
                                        <use xlinkHref={`${sprite}#icon-next`}></use>
                                    </svg>
                                </div>
                                <div className={`${s.repeat}`} onClick={() => setRepeat(!isRepeat)}>
                                    {
                                        isRepeat ? ( 
                                            <svg className={s.repeatsvg} alt="repeat">
                                                <use xlinkHref={`${sprite}#icon-repeat-active`}></use>
                                            </svg>
                                        ) : (
                                            <svg className={s.repeatsvg} alt="repeat">
                                                <use xlinkHref={`${sprite}#icon-repeat`}></use>
                                            </svg>
                                        )
                                    }
                                </div>
                                <div className={`${s.shuffle} `} onClick={() => setShuffle(!isShuffle)}>
                                    {
                                        isShuffle ? ( 
                                            <svg className={s.shufflesvg} alt="shuffle">
                                                <use xlinkHref={`${sprite}#icon-shuffle-active`}></use>
                                            </svg>
                                        ) : (
                                            <svg className={s.shufflesvg} alt="shuffle">
                                                <use xlinkHref={`${sprite}#icon-shuffle`}></use>
                                            </svg>
                                        )
                                    }
                                </div>
                            </div>
                            
                        <div className={s.trackplay}>
                            <div className={s.contain}>
                                {
                                    playingTrack ? (
                                        <div className={s.image}>
                                            <svg className={s.svg} alt="music">
                                                <use xlinkHref={`${sprite}#icon-note`}></use>
                                            </svg>       
                                        </div>
                                        ) : ('')
                                }    
                                <div className={s.author}>
                                {
                                    id ? ( 
                                        <span className={s.authorlink}>{playingTrack.name}</span>
                                    ) : (
                                        <span className={s.authorlink}></span>
                                    )
                                }     
                                </div>
                                <div className={s.album}>
                                {
                                    playingTrack ? ( 
                                        <span className={s.albumlink}>{playingTrack.author}</span>
                                    ) : ( 
                                            <span className={s.albumlink}></span>
                                    )
                                }    
                                </div>
                            </div>
                            {
                                playingTrack ? ( 
                                <div className={s.likedis}>
                                    <div className={`${s.like} ${s.btnicon}`} onClick={handleSetLike}>
                                        {
                                                isFavourite ? (
                                                    <svg className={s.likesvg} alt="like">
                                                        <use xlinkHref={`${sprite}#icon-like`}></use>
                                                    </svg>
                                                ): (
                                                    <svg className={s.dislikesvg} alt="dislike">
                                                        <use xlinkHref={`${sprite}#icon-dislike`}></use>
                                                    </svg>         
                                            )
                                        } 
                                    </div>
                                </div>   
                                ) : ( '' )
                            } 
                        </div>
                        </div>
                        <div className={s.volume}>
                            <div className={s.volume__content}>
                                <div className={s.volume__image}>
                                    <svg className={s.volume__svg} alt="volume">
                                        <use xlinkHref={`${sprite}#icon-volume`}></use>
                                    </svg>
                                </div>
                                <div className={s.volume__progress}>
                                    <input 
                                        className={`${s.volume__progressline} ${s.btn}`}
                                        type="range"
                                        min='0'
                                        max='1'
                                        step='0.01'
                                        defaultValue={state.volume * 10} 
                                        onChange={handleValueChange}
                                        />
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    );
}

export default Footer;
import sprite from './icon/sprite.svg';
import SkeletonFooter from './skeleton/footerSkeleton';
import { useState, useEffect, useRef } from 'react';
import s from './css/mainFooter.module.css'

const Footer = () => {

    const [loading, setLoading] = useState(false);
    const [play, setPlay] = useState(false);
    const [currentTime, setCurrentTime] = useState(0)
    const [duration, setDuration] = useState(0)
    const [volume, setVolume] = useState(0.4)

    const playRef = useRef(null);
    const progressSong = useRef();
    const animationRef = useRef(); 
    const volumeRef = useRef()

    const togglePlay = () => {
        const prevValue = play;
        console.log(currentTime);
        console.log(duration);
        setPlay(!prevValue);
        if (!prevValue) {
        playRef.current.play();
        animationRef.current = requestAnimationFrame(whilePlaying)
        } else {
        playRef.current.pause();
        cancelAnimationFrame(animationRef.current);
        }
    }

    const whilePlaying = () => {
        progressSong.current.value = playRef.current.currentTime;
        progressSong.current.style.setProperty('--seek-before-width', `${progressSong.current.value / playRef.current.duration * 100}%`)
        setCurrentTime(progressSong.current.value);
        animationRef.current = requestAnimationFrame(whilePlaying);
    }

    const changeRange = () => {
        playRef.current.currentTime = progressSong.current.value;
        progressSong.current.style.setProperty('--seek-before-width', `${progressSong.current.value / playRef.current.duration * 100}%`)
        setCurrentTime(progressSong.current.value);
    }

    const changeVolume = () => {
        playRef.current.volume = volumeRef.current.value
        setVolume(volumeRef.current.value)
        console.log(volume);
    }

    useEffect(() => {
        const seconds = Math.floor(playRef.current.duration);
        setDuration(seconds);
        progressSong.current.max = seconds;
    }, [playRef?.current?.loadedmetadata, playRef?.current?.readyState]);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000)
        return () => clearTimeout(timer);
    });

    return (
        <div className={s.bar}>
            <audio
                ref={playRef} 
                src="../audio/Bobby_Marleni_-_Dropin.mp3">
            </audio>
            <div className={s.content}>
                    <input 
                        type='range' 
                        step='0.01'
                        className={s.progress}
                        defaultValue='0'
                        ref={progressSong}
                        onChange={changeRange}
                    />
                    <div className={s.block}>
                        <div className={s.player}>
                        <div className={s.controls}>
                            <div className={s.prev}>
                                    <svg className={s.prevsvg} alt="prev">
                                        <use xlinkHref={`${sprite}#icon-prev`}></use>
                                    </svg>
                                </div>
                            <div className={s.play} onClick={togglePlay}>
                                {
                                play ?  
                                    <svg className={s.stopsvg} alt="play">
                                        <use xlinkHref={`${sprite}#stop`}></use> 
                                    </svg>
                                    :
                                    <svg className={s.playsvg} alt="play">
                                        <use xlinkHref={`${sprite}#icon-play`}></use> 
                                    </svg>
                                }
                            </div>
                            <div className={s.next}>
                                <svg className={s.nextsvg} alt="next">
                                    <use xlinkHref={`${sprite}#icon-next`}></use>
                                </svg>
                            </div>
                            <div className={`${s.repeat}`}>
                                <svg className={s.repeatsvg} alt="repeat">
                                    <use xlinkHref={`${sprite}#icon-repeat`}></use>
                                </svg>
                            </div>
                            <div className={`${s.shuffle} `}>
                                <svg className={s.shufflesvg} alt="shuffle">
                                    <use xlinkHref={`${sprite}#icon-shuffle`}></use>
                                </svg>
                            </div>
                        </div>
                            
                        <div className={s.trackplay}>
                            {loading ? (
                                <SkeletonFooter />
                            ) : (
                                <div className={s.contain}>
                                    <div className={s.image}>
                                        <svg className={s.svg} alt="music">
                                            <use xlinkHref={`${sprite}#icon-note`}></use>
                                        </svg>
                                    </div>
                                    <div className={s.author}>
                                            <a className={s.authorlink} href="http://">Ты та...</a>
                                    </div>
                                    <div className={s.album}>
                                        <a className={s.albumlink} href="http://">Баста</a>
                                    </div>
                                </div>)}

                            <div className={s.likedis}>
                                <div className={`${s.like} ${s.btnicon}`}>
                                    <svg className={s.likesvg} alt="like">
                                            <use xlinkHref={`${sprite}#icon-like`}></use>
                                        </svg>
                                    </div>
                                <div className={`${s.dislike} ${s.btnicon}`}>
                                        <svg className={s.dislikesvg} alt="dislike">
                                            <use xlinkHref={`${sprite}#icon-dislike`}></use>
                                        </svg>
                                    </div>
                                </div>
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
                                        defaultValue='0.4'
                                        min='0'
                                        max='1'
                                        step='0.01'
                                        ref={volumeRef}
                                        onChange={changeVolume}
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
import sprite from './icon/sprite.svg';
import SkeletonFooter from './skeleton/footerSkeleton';
import { useState, useEffect } from 'react';
import s from './css/mainFooter.module.css'

const Footer = () => {

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000)
        return () => clearTimeout(timer);
    });

    return (
        <div className={s.bar}>
            <div className={s.content}>
                    <div className={s.progress}></div>
                    <div className={s.block}>
                        <div className={s.player}>
                        <div className={s.controls}>
                            <div className={s.prev}>
                                    <svg className={s.prevsvg} alt="prev">
                                        <use xlinkHref={`${sprite}#icon-prev`}></use>
                                    </svg>
                                </div>
                            <div className={`${s.play} `}>
                                    <svg className={s.playsvg} alt="play">
                                        <use xlinkHref={`${sprite}#icon-play`}></use>
                                    </svg>
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
                                <input className={`${s.volume__progressline} ${s.btn}`} type="range" name="range" />
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
}

export default Footer;
import sprite from '../../image/sprite.svg';
import s from './song.module.css'


const Song = ({ title, author, album, time }) => {
    return (
        <div className={s.playlist__item}>
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
                    <span className={s.track__timetext}>{(time / 60).toFixed(2)}</span>
                </div>
            </div>
        </div>
    );
}


export default Song;
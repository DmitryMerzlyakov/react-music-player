import Song from "../Main/Content/playlistItem";
import s from '../Main/Content/css/contentPlaylist.module.css'
import sprite from '../Main/Content/icon/sprite.svg'


const IndiPlaylist = () => {
    return (
        <div className={s.contentplaylist}>
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
            <Song
                title="Knives n Cherries"
                author="minthaze"
                album="Captivating"
                time="1:48"
            />
        </div>
    );
}

export default IndiPlaylist;
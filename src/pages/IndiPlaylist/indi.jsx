import Nav from '../../components/navbar/navbar';
import Footer from '../../components/footer/footer';
import Search from '../../components/contentSearch/contentSearch';
import SkeletonFooter from '../../components/footer/skeleton/footerSkeleton';
import { useSelector } from 'react-redux';
import { setTrackPlay } from '../../store/slices/trackSlice';
import sprite from '../../image/sprite.svg'
import s from '../GeneralPlaylist/main.module.css'
import ss from '../../components/playlist/css/mainContent.module.css'
import sss from '../../components/contentPlaylist/contentPlaylist.module.css'
import Song from '../../components/song/song';

const IndiPlaylist = ({dataForId}) => {

    let tracksData = []
    tracksData = dataForId[2].items

    const selector = useSelector(setTrackPlay);
    const trackId = selector.payload.track.trackId;     

    return (
        <main className={s.main}>   
            <Nav />
            <div className={ss.centerblock}>
                <Search/>
                <div className={sss.content__title}>
                    <div className={`${sss.playlisttitlecol} ${sss.col01}`}>Трек</div>
                    <div className={`${sss.playlisttitlecol} ${sss.col02}`}>ИСПОЛНИТЕЛЬ</div>
                    <div className={`${sss.playlisttitlecol} ${sss.col03}`}>АЛЬБОМ</div>
                    <div className={`${sss.playlisttitlecol} ${sss.col04}`}>
                        <svg className={sss.playlisttitlesvg} alt="time">
                            <use xlinkHref={`${sprite}#icon-watch`}></use>
                        </svg>
                    </div>
                </div>
                <ul className={sss.contentplaylist}>
                    {tracksData.map(item => (
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
            </div>
            {
                trackId ? ( <Footer id={trackId} />) :  <SkeletonFooter/>
            }  
        </main>      
    );
}

export default IndiPlaylist;
import Nav from '../../components/navbar/navbar';
import Footer from '../../components/footer/footer';
import Search from '../../components/contentSearch/contentSearch';
import { useGetAllTracksQuery } from '../../servises/songsApi';
import sprite from '../../image/sprite.svg'
import s from '../GeneralPlaylist/main.module.css'
import ss from '../../components/playlist/css/mainContent.module.css'
import sss from '../../components/contentPlaylist/contentPlaylist.module.css'
import Song from '../../components/song/song';

const MyMusic = () => {

    const { data = [] } = useGetAllTracksQuery()
    const userId = localStorage.getItem('userId')

    const tracksData = data.filter((track) => track.stared_user.some((user) => user.id === Number(userId)))

    return (
        <main className={s.main}>   
            <Nav />
            <div className={ss.centerblock}>
                <Search/>
                {/* <MyContent/> */}
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
            <Footer />
            {/* <Sidebar/> */}
        </main>      
    );
}

export default MyMusic;
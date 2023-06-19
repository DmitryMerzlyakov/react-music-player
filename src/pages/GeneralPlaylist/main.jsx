import Nav from '../../components/navbar/navbar';
import Content from '../../components/playlist/playlist';
import Footer from '../../components/footer/footer';
import Sidebar from '../../components/sidebar/sidebar';
import s from './main.module.css'
import { useSelector } from 'react-redux';
import { setTrackPlay } from '../../store/slices/trackSlice';
  
const Main = () => {

  const selector = useSelector(setTrackPlay);
  const trackId = selector.payload.track.trackId;

  return (
    <>
      <main className={s.main}>
      <Nav />
      <Content />
      {
        trackId ? ( <Footer id={trackId} />) :  null
      }
      <Sidebar  />
    </main>
    </>
  )
};

export default Main;
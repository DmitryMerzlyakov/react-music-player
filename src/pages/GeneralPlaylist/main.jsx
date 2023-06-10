import Nav from '../../components/navbar/navbar';
import Content from '../../components/playlist/playlist';
import Footer from '../../components/footer/footer';
import Sidebar from '../../components/sidebar/sidebar';
import s from './main.module.css'
  
const Main = () => {
  return (
    <>
      <main className={s.main}>
      <Nav />
      <Content />
      <Footer />
      <Sidebar  />
    </main>
    </>
  )
};

export default Main;
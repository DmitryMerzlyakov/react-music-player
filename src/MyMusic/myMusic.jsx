import Nav from "../Main/Navbar/mainNav";
import Footer from '../Main/Footer/mainFooter';
import Sidebar from '../Main/Sidebar/mainSidebar';
import MyContent from "./myContent";
import s from '../Main/main.module.css'

const MyMusic = ({user, userName}) => {
    return (
        <main className={s.main}>   
            <Nav />
            <MyContent/>
            <Footer />
            <Sidebar user={user} userName={ userName }/>
        </main>      
    );
}

export default MyMusic;